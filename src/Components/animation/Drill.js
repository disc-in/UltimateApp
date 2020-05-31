import debug from './debug';

// Each drill has an attribute "positions" which is a 4D array:
// - positions[elemId][stepId][subStepId][coordinateId]
//
// Remark1: positions[elemId][0] is the initial position which must be defined for each element
// Remark2: positions[elemId][stepId] is undefined if  element i position does not change between steps stepId-1 and stepId
class Drill {
  constructor(animation) {
    this.positions = (animation && animation.positions) || [];
    this.ids = (animation && animation.ids) || [];
    this.texts = (animation && animation.texts) || [];
  }

  /** Get the position of an element at a given step or return undefined if its position at step stoppingStep is the last one at step stepId */
  getPositionsAtStep(elemId, stepId, stoppingStep = -1) {
    /* Get the position of the element at step stepId */
    var nextPosition = this.positions[stepId][elemId];

    /* If the element does not change its position at step stepId, find its last previous position */
    var stepToCheck = stepId - 1;

    /* While the position of the element at step stepId has not been found  and all the steps after the current one have been checked */
    while ((nextPosition === undefined || nextPosition === null) && stepToCheck !== stoppingStep) {
      nextPosition = this.positions[stepToCheck][elemId];
      stepToCheck -= 1;
    }

    return nextPosition;
  }

  /** Number of steps in the drill */
  stepCount() {
    return this.positions.length;
  }

  /** Add an element to the drill */
  addElement(element, initialX, initialY, elementNumber) {
    debug('drill add element at position: ' + initialX + '/' + initialY);
    //	debug("drill positions before update: " + this.positions);

    //	debug("drill element id: " + element.id);

    // Set its initial position
    this.positions[0].push([[initialX, initialY]]);

    // Add an undefined representing the fact that it does not currently move at the other steps
    for (var i = 1; i < this.stepCount(); ++i) this.positions[i].push(undefined);

    // Add its text
    this.texts.push(elementNumber);

    // Add its type
    this.ids.push(element.props.id);

    //	debug("positions after update: " + this.positions);
  }

  /** Add a step to the drill */
  addStep() {
    this.positions.push(new Array(this.ids.length));
  }

  log() {
    if (this.positions !== undefined && this.positions !== null) {
      /* For each step */
      for (var stepId = 0; stepId < this.positions.length; stepId++) {
        debug('step ' + stepId);

        for (var elementId = 0; elementId < this.positions[stepId].length; elementId++) {
          debug('\telement ' + elementId);

          if (this.positions[stepId][elementId] !== null && this.positions[stepId][elementId] !== undefined) {
            for (var cutId = 0; cutId < this.positions[stepId][elementId].length; cutId++) {
              debug('\t\tcut ' + cutId);

              if (
                this.positions[stepId][elementId][cutId] !== undefined &&
                this.positions[stepId][elementId][cutId] !== null
              ) {
                debug('\t\t\tx: ' + this.positions[stepId][elementId][cutId][0]);
                debug('\t\t\ty: ' + this.positions[stepId][elementId][cutId][1]);
              } else debug('\t\t\t' + this.positions[stepId][elementId][cutId]);
            }
          } else debug('\t\t' + this.positions[stepId][elementId]);
        }
      }
    } else {
      debug(this.positions);
    }
  }
}

export default Drill;
