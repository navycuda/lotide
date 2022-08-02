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

// Exports
module.exports = countLetters;