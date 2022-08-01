// Copy&Paste Functions
// Using the orginal eqArrays to be more in keeping with the
// spirit of the excersize.
const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};
// used to filter through the different possible data types
// within the scope of the project.
const compareValues = function(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return eqArrays(value1,value2);
  }
  return value1 === value2;
};
// Returns true if both objects identical.
const eqObjects = function(obj1, obj2) {
  // Create a detailed object of the object to simplify looping
  // later.
  const getObjDetails = function(obj) {
    return {
      orginal: obj,
      keyCount: Object.keys(obj).length,
      hasKeyValuePair: function(key, value) {
        return this.orginal[key] ? compareValues(this.orginal[key], value) : false;
      },
      equals: function(obj) {
        if (obj.keyCount !== this.keyCount) {
          return false;
        }
        for (const [key, value] of Object.entries(this.orginal)) {
          if (!obj.hasKeyValuePair(key, value)) {
            return false;
          }
        }
        return true;
      }
    };
  };
  // Detail the input objects
  const object1 = getObjDetails(obj1);
  const object2 = getObjDetails(obj2);
  // Test the objects
  return object1.equals(object2);
};

// Local Functions
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected))
    console.log(`😆 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// Execution
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);

// Step 3 assertions
const cd = { c: "1", d: [ "2", 3 ] };
const dc = { d: [ "2" , 3], c: "1" };
const cd2 = { c: "1", d: [ "2", 3, 4 ]};

assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);