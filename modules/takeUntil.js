// Local Functions
const takeUntil = function(array, callback) {
  const result = [];
  for (let a = 0; a < array.length; a++) {
    if (callback(array[a])) {
      return result;
    }
    result.push(array[a]);
  }
  return result;
};

// Export
module.exports = takeUntil;