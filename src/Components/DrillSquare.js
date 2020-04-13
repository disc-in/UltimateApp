import Drill from './Drill';

// Each drill has an attribute "positions" which is a 4D array:
// - positions[elemId][stepId][subStepId][coordinateId]
// 
// Remark1: positions[elemId][0] is the initial position which must be defined for each element
// Remark2: positions[elemId][stepId] is undefined if  element i position does not change between steps stepId-1 and stepId
class DrillSquare extends Drill{

    constructor(){

	super();

	/* Type of the element displayed */
	this.ids = ["triangle", "triangle", "triangle", "triangle", "triangle", "triangle", "triangle", "triangle", "offense", "offense", "offense", "offense", "offense", "disc"];

	/* Text displayed on each element */
	this.texts = ["", "", "", "", "", "", "", "", "1", "2", "3", "4", "5", ""];

	/* Definition of the position of each element at each step */
	stepCount = 6;

	var discPositions = new Array(stepCount);
	var p1Positions = new Array(stepCount);
	var p2Positions = new Array(stepCount);
	var p3Positions = new Array(stepCount);
	var p4Positions = new Array(stepCount);
	var p5Positions = new Array(stepCount);
	var triangle1 = new Array(stepCount);
	var triangle2 = new Array(stepCount);
	var triangle3 = new Array(stepCount);
	var triangle4 = new Array(stepCount);
	var triangle5 = new Array(stepCount);
	var triangle6 = new Array(stepCount);
	var triangle7 = new Array(stepCount);
	var triangle8 = new Array(stepCount);

	var discDeltaP =  .06;
	var discDeltaN = -.02;

	// Initial positions
	discPositions[0] = [[.30+discDeltaP, .30+discDeltaP]]; 
	p1Positions[0] = [[.30, .30]];
	p2Positions[0] = [[.16, .30]];
	p3Positions[0] = [[.60, .30]];
	p4Positions[0] = [[.60, .60]];
	p5Positions[0] = [[.30, .60]];
	triangle1[0] = [[.30, .30]];
	triangle2[0] = [[.30, .60]];
	triangle3[0] = [[.60, .30]];
	triangle4[0] = [[.60, .60]];
	triangle5[0] = [[.45, .20]];
	triangle6[0] = [[.20, .45]];
	triangle7[0] = [[.45, .70]];
	triangle8[0] = [[.70, .45]];

	// Step 1 - p2 first cut
	p2Positions[1] = [[.45, .20]];
	
	// Step 2 - p2 counter-cut, p1 throws, p3 first cut
	p2Positions[2] = [[.60, .30]];
	p3Positions[2] = [[.70, .45]]; 
	discPositions[2] = [[.60+discDeltaN, .30+discDeltaP]];

	// Step 3 - p3 counter-cut, p2 throws, p4 first cut
	p3Positions[3] = [[.60, .60]];
	p4Positions[3] = [[.45, .70]];
	discPositions[3] = [[.60+discDeltaN, .60+discDeltaN]];

	// Step 4 - p4 counter-cut, p3 throws, p5 first cut
	p4Positions[4] = [[.30, .60]];
	p5Positions[4] = [[.20, .45]];
	discPositions[4] = [[.30+discDeltaP, .60+discDeltaN]];
	
	// Step 5 - p5 counter-cut, p4 throws, p1 first cut
	p5Positions[5] = [[.30, .30]];
	p1Positions[5] = [[.45, .20]];
	discPositions[5] = [[.30+discDeltaP, .30+discDeltaP]];
	
	this.positions.push(triangle1);
	this.positions.push(triangle2);
	this.positions.push(triangle3);
	this.positions.push(triangle4);
	this.positions.push(triangle5);
	this.positions.push(triangle6);
	this.positions.push(triangle7);
	this.positions.push(triangle8);
	this.positions.push(p1Positions);
	this.positions.push(p2Positions);
	this.positions.push(p3Positions);
	this.positions.push(p4Positions);
	this.positions.push(p5Positions);
	this.positions.push(discPositions);

    }
}

export default DrillSquare;
