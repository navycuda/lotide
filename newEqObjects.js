// Global Functions
// Function used to test assertions
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`  😆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`  🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Local Functions
// Checks to see if objects are equal
const eqObjects = function(obj0, obj1) {
  // Setup the objects
  const obj0Pairs = [Object.keys(obj0), Object.values(obj0)];
  const obj1Pairs = [Object.keys(obj1), Object.values(obj1)];
  // eliminate the obvious
  const length = obj0Pairs.length;
  if (length === obj1Pairs.length) {
    for (let o = 0; o < length; o++) {
      if (!eqValue(obj0Pairs[o],obj1Pairs[o])) {
        return false;
      }
    }
    // if all other checks pass, return true
    return true;
  }
  return false;
};
// Checks to see that arrays are equal
const eqArrays = function(array0, array1) {
  const length = array0.length;
  if (length !== array1.length) {
    return false;
  }
  for (let a = 0; a < length; a++) {
    return eqValue(array0[a], array1[a]);
  }


  return false;
};
// Checks to see that values are equal
const eqValue = function(x, y) {
  // Make sure the types match or dump them to the curb.
  if (typeof x !== typeof y) {
    return false;
  } else if (typeof x === 'function') {
    return x.toString() === y.toString();
  } else if (typeof x === 'object') {
    if (Array.isArray(x) && Array.isArray(y)) {
      return eqArrays(x,y);
    }
    return eqObjects(x,y);
  }
  return x === y;
};



// Execution & Test Data

const test0 = [
  1,
  2
];
const test1 = [
  2,
  2
];
const test2 = [
  2,
  2
];

const light0 = [{ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }];
const light1 = [{ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }];
const light2 = [{ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }];

console.log(`primatives`);
assertEqual(eqValue(test0[0],test0[1]), false);
assertEqual(eqValue(test1[0],test1[1]), true);

console.log(`arrays`);
assertEqual(eqArrays(test0, test1), false);
assertEqual(eqArrays(test1, test2), true);

console.log(`objects`);
assertEqual(eqObjects(light0[0],light0[1]), true);
assertEqual(eqObjects(light1[0],light1[1]), false);
assertEqual(eqObjects(light2[0],light2[1]), false);