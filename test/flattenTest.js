// Require
const assert = require(`chai`).assert;
const eqValue = require(`../modules/eqValue`);
const flatten = require(`../modules/flatten`);


// Test
describe(`flatten()`, () => {
  it(`[ 1, 2, 3 ] === [ 1, 2, 3 ]`, () => {
    const actual = flatten([ 1, 2, 3 ]);
    const expected = [ 1, 2, 3 ];
    assert.isTrue(eqValue(actual, expected));
  });
  it(`[ 1, [ 2, 3, 4], 5] === [ 1, 2, 3, 4, 5 ]`, () => {
    const actual = flatten([ 1, [ 2, 3, 4], 5]);
    const expected = [ 1, 2, 3, 4, 5 ];
    assert.isTrue(eqValue(actual, expected));
  });
  it(`[ 1, [ 2, [[[3]]], 4], 5] === [ 1, 2, 3, 4, 5 ]`, () => {
    const actual = flatten([ 1, [ 2, [[[3]]], 4], 5]);
    const expected = [ 1, 2, 3, 4, 5 ];
    assert.isTrue(eqValue(actual, expected));
  });
});



// Add tests that will test recursion