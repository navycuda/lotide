// Copy&Paste Functions
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`😆 Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Functions
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
        return this.orginal[key] ? this.orginal[key] === value : false;
      },
      equals: function(obj) {
        let count = 0;
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