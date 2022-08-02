// Required
const eqValue = require(`./eqValue`);

// Local Functions
// Checks to see if objects are equal
// const eqObjects = function(obj0, obj1) {
//   // Setup the objects
//   const obj0Pairs = [Object.keys(obj0), Object.values(obj0)];
//   const obj1Pairs = [Object.keys(obj1), Object.values(obj1)];
//   // eliminate the obvious
//   const length = obj0Pairs.length;
//   if (length === obj1Pairs.length) {
//     for (let o = 0; o < length; o++) {
//       if (!eqValue(obj0Pairs[o],obj1Pairs[o])) {
//         return false;
//       }
//     }
//     // if all other checks pass, return true
//     return true;
//   }
//   return false;
// };

const eqObjects = (actual, correct) => eqValue(actual, correct);

// Exports
module.exports = eqObjects;