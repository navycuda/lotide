// Functions
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Testing
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("USS Enterprise", "USS Enterprise");
// assertEqual("1701", "1701-A");
// assertEqual((6 % 2), (278 % 2));
// assertEqual((6 % 2), (279 % 2));

// Exports
module.exports = assertEqual;