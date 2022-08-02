// Required
// const assertEqual = require(`../assertEqual`);
const assert = require(`chai`).assert;
const head = require(`../head`);

describe(`#head`, () => {
  it(`returns 5 for [5, 6, 7]`, () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
});


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");