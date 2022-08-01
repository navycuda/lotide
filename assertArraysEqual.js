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

// Execution
assertArraysEqual([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "23701EZ45C.XCAL", "bcx", "0x80020000", 4]);
assertArraysEqual([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "237019FU5C.XCAL", "bcx", "0x80020000", 4]);