import Drill from './Drill.js'

// Each drill has an attribute "positions" which is a 4D array:
// - positions[elemId][stepId][subStepId][coordinateId]
// 
// Remark1: positions[elemId][0] is the initial position which must be defined for each element
// Remark2: positions[elemId][stepId] is undefined if  element i position does not change between steps stepId-1 and stepId
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

	stepCount = 4

	// Define the positions of the elements throughout the drill
	var p1Positions = new Array(stepCount);
	var p2Positions = new Array(stepCount);
	var p3Positions = new Array(stepCount);
	var discPositions = new Array(stepCount);

	// Initial position (in percentage of the available space for the animation)
	// e.g.: [[.45, .03]] means
	//   - at 45% of the screen starting from the left
	//   - at  3% of the screen starting from the top
	p1Positions[0] = [[.45, .06]]; 
	p2Positions[0] = [[.45, .15]];
	p3Positions[0] = [[.45, .45]];
	discPositions[0] = [[.42, .11]];

	// Step 1 - p1 throws the disc
	discPositions[1] = [[.30, .30], [.42, .43]];
	
	// Step 2 - p1 defends, p2 receives
	p1Positions[2] = [[.45, .36]]; 
	p2Positions[2] = [[.45, .06]];

	this.positions.push(p1Positions);
	this.positions.push(p2Positions);
	this.positions.push(p3Positions);
	this.positions.push(discPositions);

    }
}

export default DrillMenageATrois;
