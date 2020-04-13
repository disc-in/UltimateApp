class Drill{

    constructor(){

	this.positions = [];
	this.ids = [];
    }

    /** Get the position of an element at a given step */
    getPositionsAtStep(elemId, stepId){
        return this._getPositionAtStep(elemId, stepId, -1);
    }

    /** Get the position of an element at a given step or return undefined if its position at step stoppingStep is the last one at step stepId */
    getPositionsAtStep(elemId, stepId, stoppingStep){

        /* Get the position of the element at step stepId */
        var nextPosition = this.positions[elemId][stepId];
        
        /* If the element does not change its position at step stepId, find its last previous position */
        var stepToCheck = stepId - 1;
        var allStepChecked = false;

        /* While the position of the element at step stepId has not been found  and all the steps after the current one have been checked */
        while(nextPosition == undefined && stepToCheck !== stoppingStep){

            nextPosition = this.positions[elemId][stepToCheck];
            stepToCheck -= 1;
        }

        return nextPosition;
    }

    /** Number of steps in the drill */
    stepCount(){
	if(this.positions.length > 0)
	    return this.positions[0].length;
	else
	    return 0;
    }

    /** Number of elements displayed in the drill */
    elemCount(){ return this.ids.length;}

}


export default Drill;
