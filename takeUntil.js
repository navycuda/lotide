// Global Functions
// Copy&Paste Functions
const eqArrays = function(first, second) {
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
const takeUntil = function(array, callback) {
  const result = [];
  for (let a = 0; a < array.length; a++) {
    if (callback(array[a])) {
      return result;
    }
    result.push(array[a]);
  }
  return result;
};

// Execution & Test Data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const correct1 = [ 1, 2, 5, 7, 2 ];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1,correct1);