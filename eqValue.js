// Required

// Function
const eqArrays = function(array0, array1) {
  const length = array0.length;
  if (length === array1.length) {
    for (let a = 0; a < length; a++) {
      if (!eqValue(array0[a], array1[a])) {
        return false;
      }
    }
    return true;
  }
  return false;
};
const eqObjects = function(obj0, obj1) {
  // Setup the objects
  const obj0Pairs = [Object.keys(obj0), Object.values(obj0)];
  const obj1Pairs = [Object.keys(obj1), Object.values(obj1)];
  // eliminate the obvious
  const length = obj0Pairs.length;
  if (length === obj1Pairs.length) {
    for (let o = 0; o < length; o++) {
      if (!eqValue(obj0Pairs[o],obj1Pairs[o])) {
        return false;
      }
    }
    // if all other checks pass, return true
    return true;
  }
  return false;
};
const eqValue = function(x, y) {
  // Make sure the types match or dump them to the curb.
  if (typeof x !== typeof y) {
    return false;
  } else if (typeof x === 'function') {
    return x.toString() === y.toString();
  } else if (typeof x === 'object') {
    if (Array.isArray(x) && Array.isArray(y)) {
      return eqArrays(x,y);
    }
    return eqObjects(x,y);
  }
  return x === y;
};

// Exports
module.exports = eqValue;
// module.exports = function (x, y) {
//   // Make sure the types match or dump them to the curb.
//   if (typeof x !== typeof y) {
//     return false;
//   } else if (typeof x === 'function') {
//     return x.toString() === y.toString();
//   } else if (typeof x === 'object') {
//     if (Array.isArray(x) && Array.isArray(y)) {
//       return eqArrays(x,y);
//     }
//     return eqObjects(x,y);
//   }
//   return x === y;
// };