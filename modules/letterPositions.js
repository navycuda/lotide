// Functions
// Returns an index of all the characters and
//   an array of their positions within the string.
const letterPositions = function(sentence) {
  const results = {};
  for (let s = 0; s < sentence.length; s++) {
    if (sentence[s] === ' ') {
      continue;
    }
    if (results[sentence[s]]) {
      results[sentence[s]].push(s);
    } else {
      results[sentence[s]] = [ s ];
    }
  }
  return results;
};

// Exports
module.exports = letterPositions;