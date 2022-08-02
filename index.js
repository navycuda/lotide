// index
// Head, returns first element of an array
const head = require(`./modules/head`);
// Tail, returns all but the first element
const tail = require(`./modules/tail`);
// Returns an array of the middle 1 or 2 elements of the array
const middle = require(`./modules/middle`);
// Returns an object with a count of all the characters excluding spaces
const countLetters = require(`./modules/countLetters`);
// Returns a count of instances a specific string occurs in an array
const countOnly = require(`./modules/countOnly`);
// Returns an index of all the characters and
//   an array of their positions within the string.
const letterPositions = require(`./modules/letterPositions`);
// eqArrays, eqObjects => eqValue,  which is recursive and has the
//   parents functions to allowed eqArrays and eqObjects to work.
const eqArrays = require(`./modules/eqArrays`);
const eqObjects = require(`./modules/eqObjects`);
const eqValue = require(`./modules/eqValue`);
// Returns an array that has been flattened.
const flatten = require(`./modules/flatten`);
// findKey looks for an object key with a callback function
const findKey = require(`./modules/findKey`);
// map does work to array items using a callback function
const map = require(`./modules/map`);
// findKeybyValue looks for a key according to the supplied value
const findKeyByValue = require(`./modules/findKeyByValue`);
// without Removes elements from the first array if they exist
//   in the second.  Current implementation only supports primatives.
const without = require(`./modules/without`);
// takeUntil builds an array up until the callback is satisfied.
const takeUntil = require(`./modules/takeUntil`);

// Exports
module.exports = {
  head,
  tail,
  middle,
  countLetters,
  countOnly,
  letterPositions,
  eqArrays,
  eqObjects,
  eqValue,
  flatten,
  findKey,
  map,
  findKeyByValue,
  without,
  takeUntil
};