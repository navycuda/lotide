// Copy&Paste Functions
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Functions
// Returns true if both objects identical.
const eqObjects = function(obj1, obj2) {
  const getObjDetails = function(obj) {
    return {
      keyCount: Object.keys(obj).length,
      
    };
  };







  console.log("Object.keys(obj1) :", Object.keys(obj1));
  console.log("Object.keys(obj2) :", Object.keys(obj2));
  if (obj1.keys === obj2.keys) {
    return true;
  }
};


// Execution
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };

assertEqual(eqObjects(ab,ba),true);
assertEqual(eqObjects(ab,abc), false);