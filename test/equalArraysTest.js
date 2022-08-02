// Required
const assert = require(`chai`).assert;
const eqArrays = require(`../eqArrays`);

// Tests
describe(`eqArrays`, () => {
  const testValues = [
    [ `[1, 2, 3] is equal to  [1, 2, 3]`,
      eqArrays([1, 2, 3], [1, 2, 3]),
      true
    ],
    [
      `[1, 2, 3] is not equal to [3, 2, 1]`,
      eqArrays([1, 2, 3], [3, 2, 1]),
      false
    ],
    [
      `["1", "2", "3"] is equal to ["1", "2", "3"]`,
      eqArrays(["1", "2", "3"], ["1", "2", "3"]),
      true
    ],
    [
      `["1", "2", "3"] is not equal to ["1", "2", 3]`,
      eqArrays(["1", "2", "3"], ["1", "2", 3]),
      false
    ],
    [
      `23701EZ45C.XCAL is equal to 23701EZ45C.XCAL`,
      eqArrays([{ data: "23701EZ45C.XCAL" }, "2", "3"], [{ data: "23701EZ45C.XCAL" }, "2", "3"]),
      true
    ],
    [
      `23701EZ45C.XCAL is not equal to 237019FU5C.XCAL`,
      eqArrays([{ data: "23701EZ45C.XCAL" }, "2", "3"], [{ data: "237019FU5C.XCAL" }, "2", "3"]),
      false
    ],
    [
      `bcx is equal to bcx`,
      eqArrays([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "23701EZ45C.XCAL", "bcx", "0x80020000", 4]),
      true
    ],
    [
      `23701EZ45C.XCAL is not equal to 237019FU5C.XCAL`,
      eqArrays([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "237019FU5C.XCAL", "bcx", "0x80020000", 4]),
      false
    ]
  ];
  // loop through the test values
  for (const values of testValues) {
    it(values[0], () => {
      assert.strictEqual(values[1],values[2]);
    });
  }
});
