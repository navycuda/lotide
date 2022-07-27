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

// Functions
const letterPositions = function(sentence) {
  const results = {};
  
  return results;
};

// Execution