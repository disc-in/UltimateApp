/** Menage a trois drill
 *
 *  Each drill has an attribute "positions" which is a 4D array:
 * - positions[i][j][k][l]: coordinate l at substep k of step j for element to display number i
 *
 * Remark1: positions[i][0] is the initial position which must be defined for each element i
 * Remark2: positions[i][j] is undefined if  element i position does not change between steps j-1 and j
 */

// Define the shape/type of the elements displayed in this drill
const p1Id = 'offense';
const p2Id = 'defense';
const p3Id = 'offense';
const discId = 'disc';

const ids = [p1Id, p2Id, p3Id, discId];
const texts = ['1', '2', '3', ''];

const stepCount = 5;

// Define the positions of the elements throughout the drill
var p1Positions = new Array(stepCount);
var p2Positions = new Array(stepCount);
var p3Positions = new Array(stepCount);
var discPositions = new Array(stepCount);

// Initial position (in percentage of the available space for the animation)
// e.g.: [[.45, .03]] means
//   - at 45% of the screen starting from the left
//   - at  3% of the screen starting from the top
p1Positions[0] = [[0.45, 0.06]];
p2Positions[0] = [[0.45, 0.15]];
p3Positions[0] = [[0.45, 0.45]];
discPositions[0] = [[0.42, 0.11]];

// Step 1 - p1 throws the disc
discPositions[1] = [
  [0.3, 0.3],
  [0.42, 0.43],
];

// Step 2 - p1 defends, p2 becomes the receiver
p1Positions[2] = [[0.45, 0.36]];
p2Positions[2] = [[0.45, 0.06]];

// Step 3 - p3 throws the disc
discPositions[3] = [
  [0.3, 0.3],
  [0.42, 0.11],
];

// Step 4 - p3 defends, p1 becomes the receiver
p1Positions[4] = [[0.45, 0.45]];
p3Positions[4] = [[0.45, 0.15]];

// Warning: the elements must be in the same order in this.positions than in this.ids and this.texts
const positions = Array(ids.length);
positions[0] = p1Positions;
positions[1] = p2Positions;
positions[2] = p3Positions;
positions[3] = discPositions;

export default { positions, ids, texts };
