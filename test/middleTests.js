// Require
const assertArraysEqual = require(`../assertArraysEqual`);
const middle = require(`../middle`);

// Testing
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,0]), [5,6]);