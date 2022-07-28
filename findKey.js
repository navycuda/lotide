// Global Functions
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Local Functions
const findKey = function (object, callback) {
  
  for (const [key, value] of Object.entries(object)) {
    if (callback(value))
      return key;
  }
};

// Execution & Test Data
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), `noma`);

const enterprises = {
  'NCC-1701': { captain: `Pike` },
  'NCC-1701-A': { captain: `Kirk` },
  'NCC-1701-B': { captain: `Harriman` },
  'NCC-1701-C': { captain: `Garrett` },
  'NCC-1701-D': { captain: `Picard` },
  'NCC-1701-E': { captain: `Picard` },
};
const registry = findKey(enterprises, e => e.captain === "Garrett");

assertEqual(registry, `NCC-1701-C`);