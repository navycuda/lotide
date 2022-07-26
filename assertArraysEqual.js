// Functions
const eqArrays = function(first, second) {
  // first tried toString(), then submitted loop for previous attempt
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

assertArraysEqual([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "23701EZ45C.XCAL", "bcx", "0x80020000", 4]);
assertArraysEqual([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "237019FU5C.XCAL", "bcx", "0x80020000", 4]);