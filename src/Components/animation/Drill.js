// Each drill has an attribute "positions" which is a 4D array:
// - positions[stepId][elemId][subStepId][coordinateId]
//
// Remark1: positions[0][elemId] is the initial position which must be defined for each element
// Remark2: positions[stepId][elemId] is undefined if element i position does not change between steps stepId-1 and stepId
class Drill {
  constructor(animation) {
    this.positions = (animation && animation.positions) || [[], []];
    this.ids = (animation && animation.ids) || [];
    this.texts = (animation && animation.texts) || [];
    this.background = (animation && animation.background) || 'endzone';
    if (this.positions.length === 1) {
      // A serialized array containing only null or being empty may be removed (eg. on Firebase)
      // An animation must contain 2 steps to be displayed
      // So we reconstruct a second step
      this.addStep();
    }
  }

  /** Get the position of an element at a given step.
   * If the element does not move at step stepId, the previous step will be check to find the element previous position.
   * stoppingStep is the last step to check to find the previous position of the element
   */
  getPositionsAtStep(elemId, stepId) {
    /* Get the position of the element at step stepId */
    let nextPosition = this.positions[stepId][elemId];

    /* If the element does not change its position at step stepId, find its last previous position */
    let stepToCheck = stepId - 1;

    /* While the position of the element at step stepId has not been found  and all the steps after the current one have been checked */
    while ((nextPosition === undefined || nextPosition === null) && stepToCheck !== -1) {
      nextPosition = this.positions[stepToCheck][elemId];
      stepToCheck -= 1;
    }

    return nextPosition;
  }

  /** Number of steps in the drill */
  stepCount() {
    return this.positions.length;
  }

  elemCount() {
    if (this.positions === undefined || this.positions === null || this.positions.length === 0) return 0;
    else return this.positions[0].length;
  }

  /** Add an element to the drill */
  addElement(type, initialX, initialY, text) {
    this.positions[0].push([[initialX, initialY]]);
    // Add an null representing the fact that it does not currently move at the other steps
    for (let i = 1; i < this.stepCount(); ++i) this.positions[i].push(null);

    this.texts.push(text);
    this.ids.push(type);
  }

  removeElement(elementIndex) {
    const elementId = this.ids[elementIndex];
    const elementText = this.texts[elementIndex];

    /* Remove its values from the drill */
    for (var i = 0; i < this.positions.length; i++) this.positions[i].splice(elementIndex, 1);
    this.ids.splice(elementIndex, 1);
    this.texts.splice(elementIndex, 1);

    /* If the element had a number */
    if (elementText !== '') {
      const vElement = parseInt(elementText, 10);

      /* For each element which has a number and which is of the same type than the element removed */
      for (var i = 0; i < this.texts.length; i++)
        if (this.texts[i] !== '' && this.ids[i] === elementId) {
          const vi = parseInt(this.texts[i], 10);

          /* If element i has a greater number than the element removed, decrement its number */
          if (vi > vElement) {
            this.texts[i] = (vi - 1).toString();
          }
        }
    }
  }

  /** Add a step to the drill */
  removeStep() {
    if (this.stepCount() > 2) {
      const lastStepId = this.stepCount() - 1;

      for (let elemId = 0; elemId < this.elemCount(); elemId++) this.positions[lastStepId][elemId] = undefined;
      this.positions.pop();
    }
  }

  /** Add a step to the drill */
  addStep() {
    this.positions.push(new Array(this.ids.length));
  }

  /** Test if all the positions in the current drill are the same than in otherDrill */
  isEqualTo(otherDrill) {
    let isEqual = otherDrill !== undefined && otherDrill !== null;

    if (isEqual && this.elemCount() !== otherDrill.elemCount()) isEqual = false;

    if (isEqual && this.background !== otherDrill.background) isEqual = false;

    let elemId = 0;

    while (isEqual && elemId < this.elemCount()) {
      isEqual = this.isElementEqualIn(elemId, otherDrill);
      elemId++;
    }

    return isEqual;
  }

  /* Test if all the positions of the element of id elemId are the same in the current drill and otherDrill */
  isElementEqualIn(elemId, otherDrill) {
    let isEqual = otherDrill !== undefined && otherDrill !== null;

    /* Check the positions */
    let stepId = 0;
    let cutId = 0;

    // Get all the positions in props and state
    const pPositions = this.positions;
    const sPositions = otherDrill.positions;

    // If there is not the same number of steps
    if (pPositions.length !== sPositions.length) isEqual = false;

    // While no difference has been found and all the positions have not been tested
    while (stepId < pPositions.length && isEqual) {
      if (pPositions.length !== sPositions.length) isEqual = false;

      if (isEqual && pPositions[stepId].length !== sPositions[stepId].length) isEqual = false;

      const pUndefined = pPositions[stepId][elemId] === undefined || pPositions[stepId][elemId] === null;
      const sUndefined = sPositions[stepId][elemId] === undefined || sPositions[stepId][elemId] === null;

      let pSize = -1;
      let sSize = -1;

      if (!pUndefined) pSize = pPositions[stepId][elemId].length;

      if (!sUndefined) sSize = sPositions[stepId][elemId].length;

      if (
        pSize !== sSize ||
        (pSize > 0 &&
          (pPositions[stepId][elemId][cutId][0] !== sPositions[stepId][elemId][cutId][0] ||
            pPositions[stepId][elemId][cutId][1] !== sPositions[stepId][elemId][cutId][1]))
      )
        // If the position is different
        isEqual = false;

      // Go to the next position
      if (pPositions[stepId][elemId] === undefined || pPositions[stepId][elemId] === null) {
        stepId++;
        cutId = 0;
      } else if (pPositions[stepId][elemId].length > cutId + 1) cutId++;
      else {
        stepId++;
        cutId = 0;
      }
    }

    return isEqual;
  }

  log() {
    console.log('== Positions');

    if (this.positions !== undefined && this.positions !== null) {
      /* For each step */
      for (let stepId = 0; stepId < this.positions.length; stepId++) {
        console.log('step ' + stepId);

        for (let elementId = 0; elementId < this.positions[stepId].length; elementId++) {
          console.log('\telement ' + elementId);

          if (this.positions[stepId][elementId] !== null && this.positions[stepId][elementId] !== undefined) {
            for (let cutId = 0; cutId < this.positions[stepId][elementId].length; cutId++) {
              console.log('\t\tcut ' + cutId);

              if (
                this.positions[stepId][elementId][cutId] !== undefined &&
                this.positions[stepId][elementId][cutId] !== null
              ) {
                console.log('\t\t\tx: ' + this.positions[stepId][elementId][cutId][0]);
                console.log('\t\t\ty: ' + this.positions[stepId][elementId][cutId][1]);
              } else console.log('\t\t\t' + this.positions[stepId][elementId][cutId]);
            }
          } else console.log('\t\t' + this.positions[stepId][elementId]);
        }
      }
    } else {
      console.log(this.positions);
    }
  }
}

export default Drill;
