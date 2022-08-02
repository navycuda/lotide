// Require
const assert = require(`chai`).assert;
const middle = require(`../middle`);
const eqArrays = require(`../eqArrays`);

// Testing
const description = `middle()`;
const assertions = [];


const assertArraysEqual = function(actual, expected) {
  const assertion = {};
  assertion.description = `${actual.toString()} middle value is ${expected.toString()}`
  assertion.actual = eqArrays(actual, expected);
  assertion.expected = true;
  assertions.push(assertion);
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,0]), [5,6]);

// console.log(assertions);

describe(description, () => {
  for (const assertion of assertions) {
    it(assertion.description, () => {
      assert.strictEqual(assertion.actual, assertion.expected);
    });
  }
});