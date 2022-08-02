// Functions
const tail = function(array) {
  let result = [];
  for (let a = 1; a < array.length; a++)
    result.push(array[a]);
  return result;
};

// Exports
module.exports = tail;