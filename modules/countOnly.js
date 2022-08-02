// Local Functions
// array of strings
// valuesToCount is an object with a key to match with the string
//   and a true value if that key should actually be counted.
const countOnly = function(array, valuesToCount) {
  const results = {};
  for (const item of array) {
    console.log(item);
    if (valuesToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// Exports
module.exports = countOnly;