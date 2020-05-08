// Each drill has an attribute "positions" which is a 4D array:
// - positions[elemId][stepId][subStepId][coordinateId]
//
// Remark1: positions[0][elemId] is the initial position which must be defined for each element
// Remark2: positions[stepId][elemId] is undefined if  element i position does not change between steps stepId-1 and stepId

// Define the shape/type of the elements displayed in this drill
var p1Id = 'offense';
var p2Id = 'defense';
var p3Id = 'offense';
var discId = 'disc';

var ids = [p1Id, p2Id, p3Id, discId];
var texts = ['1', '2', '3', ''];

var stepCount = 3;

var positions = new Array(stepCount);

// Initial position (in percentage of the available space for the animation)
// e.g.: [[.45, .03]] means
//   - at 45% of the screen starting from the left
//   - at  3% of the screen starting from the top
positions[0] = new Array(texts.length);
positions[0][0] = [[0.45, 0.06]];
positions[0][1] = [[0.45, 0.15]];
positions[0][2] = [[0.45, 0.45]];
positions[0][3] = [[0.42, 0.11]];

// Step 1 - p1 throws the disc
positions[1] = new Array(texts.length);
positions[1][3] = [
  [0.3, 0.3],
  [0.42, 0.43],
];

// Step 2 - p1 defends, p2 receives
positions[2] = new Array(texts.length);
positions[2][0] = [[0.45, 0.36]];
positions[2][1] = [[0.45, 0.06]];

export default { ids, positions, texts };
