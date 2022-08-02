// Local Functions
const getStartPos = function(length) {
  const remainder = length % 2;
  const halfLength = Math.floor(length / 2);
  return {
    position: !remainder ? halfLength - 1 : halfLength,
    size: remainder ? 1 : 2
  };
};
const middle = function(array) {
  const length = array.length;
  if (length < 3) {
    return [];
  } else if (length === 3) {
    return [ array[1] ];
  }
  const start = getStartPos(length);
  let result = [];
  for (let s = 0; s < start.size; s++) {
    result.push(array[start.position + s]);
  }
  return result;
};

// Exports
module.exports = middle;