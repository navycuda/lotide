// Required
const eqValue = require(`./eqValue`);

const eqObjects = (actual, correct) => eqValue(actual, correct);

// Exports
module.exports = eqObjects;