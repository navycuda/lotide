// Copy&Paste Functions
const eqArrays = function(first, second) {
  // Another copy paste... of the wrong way... but it works!
  return JSON.stringify(first) === JSON.stringify(second);
};
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`😆 Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🤬 Assertion Failed: ${first} !== ${second}`);
  }
};

// Local Functions
const getStartPos = function(length) {
  const remainder = length % 2;
  const halfLength = Math.floor(length / 2);
  return {
    position: !remainder ? halfLength - 1 : halfLength,
    size: remainder ? 1 : 2
  };
};
const middle = function(array) {
  const length = array.length;
  if (length < 3) {
    return [];
  } else if (length === 3) {
    return [ array[1] ];
  }
  const start = getStartPos(length);
  let result = [];
  for (let s = 0; s < start.size; s++) {
    result.push(array[start.position + s]);
  }
  return result;
};

// Execution
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