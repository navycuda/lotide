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
const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

// Execution & Test Data
const starships = [ `USS Enterprise`, `USS Reliant`, `USS Excelsior`, `USS Yamato`, `USS Lexington`, `USS Intrepid` ];
const correctStarshipFirstLetters = [ `E`, `R`, `E`, `Y`, `L`, `I`];
const resultStarship = map(starships, uss => uss[4]);

const numbers = [ 1, 2, 4, 8 ];
const correctNumbers = [1, 4, 16, 64];
const sqrtNumbers = map(numbers, n => n * n);

assertArraysEqual(resultStarship, correctStarshipFirstLetters);
assertArraysEqual(sqrtNumbers, correctNumbers);