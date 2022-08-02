// Functions
const findKeyByValue = function(obj, searchValue) {
  for (const [key, value] of Object.entries(obj)) {
    if (value === searchValue) {
      return key;
    }
  }
};

// Exports
module.exports = findKeyByValue;