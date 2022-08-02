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


// Exports
module.exports = {
  head,
  tail,
  middle
};