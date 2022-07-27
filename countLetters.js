// Copy&Paste Functions
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Local Functions
const countLetters = function(string) {
  const result = {};

  for (const char of string) {
    if (char === ' ') {
      continue;
    }
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
};

// Execution
const lhith = "lighthouse in the house";
console.log(countLetters(lhith));