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
assertArraysEqual(results1,correct1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const correct2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, correct2);