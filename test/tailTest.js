// Required
const assert = require(`chai`).assert;
const tail = require(`../tail`);

const description = `tail()`;
const assertions = [];

// Cheat my way into test cases fitting mocha/chai
const assertEqual = function (actual, expected) {
  const assertion = {};
  assertion.description = `${actual.toString()} middle value is ${expected.toString()}`
  assertion.actual = actual === expected;
  assertion.expected = true;
  assertions.push(assertion);
};

// Test the function of tail
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


// Test Case: Checking the orginal array is undamaged
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// output for mocha/chai
describe(description, () => {
  for (const assertion of assertions) {
    it(assertion.description, () => {
      assert.strictEqual(assertion.actual, assertion.expected);
    });
  }
});