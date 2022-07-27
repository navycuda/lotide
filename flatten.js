// Functions
const flatten = function(array) {
  let result = [];
  for (let a = 0; a < array.length; a++) {
    if (array[a].isArray) {
      for (let aa = 0; aa < array[a].length; aa++) {
        result.push(array[a][aa]);
      }
    } else {
      result.push(array[a]);
    }
  }
  return result;
};
const eqArrays = function(first, second) {
  // I looked into serializing the arrays so I can make a perfect
  // comparison of them regardless data types within the array.
  return JSON.stringify(first) === JSON.stringify(second);
};
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`😆 Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🤬 Assertion Failed: ${first} !== ${second}`);
  }
};

// Execution
assertArraysEqual(flatten([1,2, [3,4], 5, [ 6 ]]), [1,2, [3,4], 5, [ 6 ]]);
assertArraysEqual(flatten([1,2, [3,4], 5, [ 6 ]]), [1,2, 3,4, 5,  6 ]);