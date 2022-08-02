// Required
const eqArrays = require(`./eqArrays`);

//Function
const without = function(sourceArray, itemsToRemoveArray) {
  let result = [];
  for (let s = 0; s < sourceArray.length; s++) {
    let exists = false;
    for (let i = 0; i < itemsToRemoveArray.length; i++) {
      if (eqArrays(sourceArray[s], itemsToRemoveArray[i])) {
        exists = true;
      }
    }
    if (!exists) {
      result.push(sourceArray[s]);
    }
  }
  return result;
};

// Exports
module.exports = without;