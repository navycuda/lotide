// Required
const eqValue = require(`./eqValue`);

// Checks to see that arrays are equal
// const eqArrays = function(array0, array1) {
//   const length = array0.length;
//   if (length === array1.length) {
//     for (let a = 0; a < length; a++) {
//       if (!eqValue(array0[a], array1[a])) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
// };
const eqArrays = (actual, correct) => eqValue(actual, correct);

// Exports
module.exports = eqArrays;