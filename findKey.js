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

const cummins = {
  'isv': { displacement: 5.0, name: `isv5.0L`, vehicle: `TitanXD`},
  'bt6': { displacement: 5.9, name: `bt6-5.9L`, vehicle: `DodgeRam`},
  'isb': { displacement: 6.7, name: `isb-6.7L`, vehicle: `RamTruck`}
};
const isv = findKey(cummins, c => c.displacement === 5);
const bt6 = findKey(cummins, c => c.vehicle === `DodgeRam`);
const isb = findKey(cummins, c => c.name === `isb-6.7L`);

assertEqual(isv, `isv`);
assertEqual(bt6, `bt6`);
assertEqual(isb, `isb`);