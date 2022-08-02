// Required
const eqValue = require(`./eqValue`);

const eqArrays = (actual, correct) => eqValue(actual, correct);

// Exports
module.exports = eqArrays;