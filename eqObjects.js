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
  // Create a detailed object of the object to simplify looping
  // later.
  const getObjDetails = function(obj) {
    return {
      orginal: obj,
      keyCount: Object.keys(obj).length,
      hasKeyValuePair: function(key, value) {
        return obj[key] ? obj[key] === value : false;
      }
    };
  };
  console.log(obj1);
  console.log(obj2);

  // Detail the input objects
  const object1 = getObjDetails(obj1);
  const object2 = getObjDetails(obj2);

  console.log(object1);
  console.log(object2);

  // Test the objects
  if (object1.keyCount !== object2.keyCount) {
    return false;
  }
  for (const [key, value] of Object.entries(object1.orginal)) {
    if (!object2.hasKeyValuePair(key,value))
      return false;
  }
  for (const [key, value] of Object.entries(object2.orginal)) {
    if (!object1.hasKeyValuePair(key,value))
      return false;
  }
  return true;
};


// Execution
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };

assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab,abc), false);