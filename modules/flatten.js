// Functions

// [ 1, 2, [ 3, 4, 5], [[ 6, 7],[8 , 9]]]

const flatten = function(array) {
  let result = [];
  for (let a = 0; a < array.length; a++) {
    if (Array.isArray(array[a])) {
      result = result.concat(flatten(array[a]));
    } else {
      result.push(array[a]);
    }
  }
  return result;
};




// Exports
module.exports = flatten;
