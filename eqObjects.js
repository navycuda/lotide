// Copy&Paste Functions
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
};
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

// Functions
// used to filter through the different possible data types
// within the scope of the project.
const compareValues = function(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return eqArrays(value1,value2);
  } else if (value1 instanceof Object && value2 instanceof Object) {
    return eqObjects;
  }
  return value1 === value2;
};
// Tests entries

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



// Execution
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab,abc), false);

// Step 3 assertions
const cd = { c: "1", d: [ "2", 3 ] };
const dc = { d: [ "2" , 3], c: "1" };
const cd2 = { c: "1", d: [ "2", 3, 4 ]};

assertEqual(eqObjects(cd,dc), true);
assertEqual(eqObjects(cd,cd2), false);

const light0 = [{ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }];
const light1 = [{ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }];
const light2 = [{ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }];

assertEqual(eqObjects(light0[0],light0[1]), true);
assertEqual(eqObjects(light1[0],light1[1]), false);
assertEqual(eqObjects(light2[0],light2[1]), false);