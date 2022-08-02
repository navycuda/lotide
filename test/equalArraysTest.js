// Required
const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);

// Tests
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([{ data: "23701EZ45C.XCAL" }, "2", "3"], [{ data: "23701EZ45C.XCAL" }, "2", "3"]), true);
assertEqual(eqArrays([{ data: "23701EZ45C.XCAL" }, "2", "3"], [{ data: "237019FU5C.XCAL" }, "2", "3"]), false);

assertEqual(eqArrays([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "23701EZ45C.XCAL", "bcx", "0x80020000", 4]), true);
assertEqual(eqArrays([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "237019FU5C.XCAL", "bcx", "0x80020000", 4]), false);
