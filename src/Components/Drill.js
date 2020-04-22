/** Represents a the successive positions of the elements in a drill
   Each drill has an attribute "positions" which is a 4D array:
 - positions[elemId][stepId][subStepId][coordinateId]

 Remark1: positions[elemId][0] is the initial position which must be defined for each element
 Remark2: positions[elemId][stepId] is undefined if  element i position does not change between steps stepId-1 and stepId
*/
class Drill {
  constructor(animation) {
    console.log(' posistions are ', JSON.stringify(animation.positions));
    this.positions = animation.positions || [];
    this.ids = animation.ids || [];
    this.texts = animation.texts || [];
  }

  /** Get the position of an element at a given step or return null if its position at step stoppingStep is the last one at step stepId */
  getPositionsAtStep(elemId, stepId, stoppingStep = -1) {
    /* Get the position of the element at step stepId */
    console.log('positions are ', JSON.stringify(this.positions[stepId]));
    let nextPosition = this.positions[stepId][elemId];

    /* If the element does not change its position at step stepId, find its last previous position */
    var stepToCheck = stepId - 1;

    /* While the position of the element at step stepId has not been found  and all the steps after the current one have been checked */
    while ((nextPosition === null || nextPosition === undefined) && stepToCheck !== stoppingStep) {
      nextPosition = this.positions[stepToCheck][elemId];
      stepToCheck -= 1;
    }

    return nextPosition;
  }

  /** Number of steps in the drill */
  stepCount() {
    return this.positions.length;
  }

  /** Number of elements displayed in the drill */
  elemCount() {
    return this.ids.length;
  }

  /** Add an element to the drill */
  addElement(element, initialX, initialY) {
    // Set its initial position
    this.positions[0].push([[initialX, initialY]]);

    // Add an undefined representing the fact that it does not currently move at the other steps
    for (var i = 1; i < this.stepCount(); ++i) this.positions[i].push(undefined);

    // Add its text
    element.props.number == undefined ? this.texts.push('') : this.texts.push(element.props.number);

    // Add its type
    this.ids.push(element.props.id);
  }
}

export default Drill;
