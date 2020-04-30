// Each drill has an attribute "positions" which is a 4D array:
// - positions[elemId][stepId][subStepId][coordinateId]
// 
// Remark1: positions[elemId][0] is the initial position which must be defined for each element
// Remark2: positions[elemId][stepId] is undefined if  element i position does not change between steps stepId-1 and stepId
class Drill{

    constructor(){

	this.positions = [];
	this.ids = [];
	this.texts = [];
    }

    /** Get the position of an element at a given step */
    getPositionsAtStep(elemId, stepId){
        return this._getPositionAtStep(elemId, stepId, -1);
    }

    /** Get the position of an element at a given step or return undefined if its position at step stoppingStep is the last one at step stepId */
    getPositionsAtStep(elemId, stepId, stoppingStep){

//	console.log("Drill: getposAtStep");

//	console.log("stepdId: " + stepId + " elemId: " + elemId);
	
        /* Get the position of the element at step stepId */
        var nextPosition = this.positions[stepId][elemId];
        
        /* If the element does not change its position at step stepId, find its last previous position */
        var stepToCheck = stepId - 1;
        var allStepChecked = false;

        /* While the position of the element at step stepId has not been found  and all the steps after the current one have been checked */
        while(nextPosition == undefined && stepToCheck != stoppingStep){

//	    console.log("Step to check: " + stepToCheck);
            nextPosition = this.positions[stepToCheck][elemId];
            stepToCheck -= 1;
        }

        return nextPosition;
    }

    /** Number of steps in the drill */
    stepCount(){
	return this.positions.length;
    }

    /** Number of elements displayed in the drill */
    elemCount(){ return this.ids.length;}

    /** Add an element to the drill */
    addElement(element, initialX, initialY){

	console.log("drill add element at position: " + initialX + "/" + initialY);
//	console.log("drill positions before update: " + this.positions);

//	console.log("drill element id: " + element.id);
	
	// Set its initial position
	this.positions[0].push([[initialX, initialY]]);
	
	// Add an undefined representing the fact that it does not currently move at the other steps
	for(var i = 1; i < this.stepCount(); ++i)
	    this.positions[i].push(undefined);
	
	// Add its text
	element.props.number == undefined? this.texts.push(""):this.texts.push(element.props.number);

	// Add its type
	this.ids.push(element.props.id);

//	console.log("positions after update: " + this.positions);
    }


    log(){

	if(this.positions !== undefined && this.positions !== null){

	    /* For each step */
	    for(var stepId = 0; stepId < this.positions.length; stepId++){
		console.log("step " + stepId);

		
		for(var elementId = 0; elementId < this.positions[stepId].length; elementId++){
		    console.log("\telement " + elementId);

		    if(this.positions[stepId][elementId] !== null && this.positions[stepId][elementId] !== undefined){

			for(var cutId = 0; cutId < this.positions[stepId][elementId].length; cutId++){

			    console.log("\t\tcut " + cutId);

			    if(this.positions[stepId][elementId][cutId] !== undefined && this.positions[stepId][elementId][cutId] !== null){
				console.log("\t\t\tx: " + this.positions[stepId][elementId][cutId][0]);
				console.log("\t\t\ty: " + this.positions[stepId][elementId][cutId][1]);
			    }
			    else
				console.log("\t\t\t" + this.positions[stepId][elementId][cutId]);
			}
			
		    }
		    else
			console.log("\t\t" + this.positions[stepId][elementId]);
		}
	    }
	}
	else{
	    console.log(this.positions);
	}
    }

}


export default Drill;
