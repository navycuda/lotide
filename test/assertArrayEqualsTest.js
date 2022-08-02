// Required
const assert = require(`chai`).assert;
const assertArraysEqual = require(`../assertArraysEqual`);


// Testing parameters
assertArraysEqual([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "23701EZ45C.XCAL", "bcx", "0x80020000", 4]);
assertArraysEqual([ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ], [ "237019FU5C.XCAL", "bcx", "0x80020000", 4]);