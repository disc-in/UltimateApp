
// Each drill has an attribute "positions" which is a 4D array:
// - positions[stepId][elemId][subStepId][coordinateId]
// 
// Remark1: positions[0][elemId] is the initial position which must be defined for each element
// Remark2: positions[stepId][elemId] is undefined if element i position does not change between steps stepId-1 and stepId
// Remark3: the coordinates are expressed in percentage in [0, 1] of the space available for the animation 

/* Type of the element displayed */
const ids = [
     'triangle',
     'triangle',
     'triangle',
     'triangle',
     'triangle',
     'triangle',
     'triangle',
     'triangle',
     'offense',
     'offense',
     'offense',
     'offense',
     'offense',
     'disc'
];

/* Text displayed on each element */
const texts = ['', '', '', '', '', '', '', '', '1', '2', '3', '4', '5', ''];

/* Definition of the position of each element at each step */
const stepCount = 6;

var discDeltaP =  .06;
var discDeltaN = -.02;

const positions = new Array(stepCount);

// Initial positions
positions[0] = new Array(texts.length);

positions[0][0] = [[.30, .30]];
positions[0][1] = [[.30, .60]];
positions[0][2] = [[.60, .30]];
positions[0][3] = [[.60, .60]];
positions[0][4] = [[.45, .20]];
positions[0][5] = [[.20, .45]];
positions[0][6] = [[.45, .70]];
positions[0][7] = [[.70, .45]];
positions[0][8] = [[.30, .30]];
positions[0][9] = [[.16, .30]];
positions[0][10] = [[.60, .30]];
positions[0][11] = [[.60, .60]];
positions[0][12] = [[.30, .60]];
positions[0][13] = [[.30+discDeltaP, .30+discDeltaP]]; 

// Step 1 - p2 first cut
positions[1] = new Array(texts.length);
positions[1][9] = [[.45, .20]];

// Step 2 - p2 counter-cut, p1 throws, p3 first cut
positions[2] = new Array(texts.length);
positions[2][9] = [[.60, .30]];
positions[2][10] = [[.70, .45]]; 
positions[2][13] = [[.60+discDeltaN, .30+discDeltaP]];

// Step 3 - p3 counter-cut, p2 throws, p4 first cut
positions[3] = new Array(texts.length);
positions[3][10] = [[.60, .60]];
positions[3][11] = [[.45, .70]];
positions[3][13] = [[.60+discDeltaN, .60+discDeltaN]];

// Step 4 - p4 counter-cut, p3 throws, p5 first cut
positions[4] = new Array(texts.length);
positions[4][11] = [[.30, .60]];
positions[4][12] = [[.20, .45]];
positions[4][13] = [[.30+discDeltaP, .60+discDeltaN]];

// Step 5 - p5 counter-cut, p4 throws, p1 first cut
positions[5] = new Array(texts.length);
positions[5][12] = [[.30, .30]];
positions[5][8] = [[.45, .20]];
positions[5][13] = [[.30+discDeltaP, .30+discDeltaP]];

export default { positions, ids, texts };
