import Drill from './Drill.js'

// Each drill has an attribute "positions" which is a 4D array:
// - positions[elemId][stepId][subStepId][coordinateId]
// 
// Remark1: positions[0][elemId] is the initial position which must be defined for each element
// Remark2: positions[stepId][elemId] is undefined if  element i position does not change between steps stepId-1 and stepId
class DrillMenageATrois extends Drill{

    constructor(){

	super();

	// Define the shape/type of the elements displayed in this drill
	var p1Id = "offense";
	var p2Id = "defense";
	var p3Id = "offense";
	var discId = "disc";

	this.ids = [p1Id, p2Id, p3Id, discId];
	this.texts = ["1", "2", "3", ""];

	var stepCount = 3;

	this.positions = new Array(stepCount);

	// Initial position (in percentage of the available space for the animation)
	// e.g.: [[.45, .03]] means
	//   - at 45% of the screen starting from the left
	//   - at  3% of the screen starting from the top
	this.positions[0] = new Array(this.texts.length);
	this.positions[0][0] = [[.45, .06]]; 
	this.positions[0][1] = [[.45, .15]];
	this.positions[0][2] = [[.45, .45]];
	this.positions[0][3] = [[.42, .11]];

	// Step 1 - p1 throws the disc
	this.positions[1] = new Array(this.texts.length);
	this.positions[1][3] = [[.30, .30], [.42, .43]];
	
	// Step 2 - p1 defends, p2 receives
	this.positions[2] = new Array(this.texts.length);
	this.positions[2][0] = [[.45, .36]]; 
	this.positions[2][1] = [[.45, .06]];

    }
}

export default DrillMenageATrois;
