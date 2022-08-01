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
const correct = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
const letterCount = countLetters(lhith);
console.log(countLetters(lhith));
// forgot to use assertEqual!
for (const letter in letterCount) {
  assertEqual(letterCount[letter], correct[letter]);
}