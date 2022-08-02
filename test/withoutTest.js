// Functions
const eqArrays = function(first, second) {
  // first tried toString(), then submitted loop for previous attempt
  // I looked into serializing the arrays so I can make a perfect
  // comparison of them regardless data types within the array.
  return JSON.stringify(first) === JSON.stringify(second);
};
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`😆 Assertion Passed: ${first} === ${second}`);
  } else {
    console.log(`🤬 Assertion Failed: ${first} !== ${second}`);
  }
};
const without = function(source, itemsToRemove) {
  let result = [];

  for (let s = 0; s < source.length; s++) {
    let exists = false;
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (eqArrays(source[s], itemsToRemove[i])) {
        exists = true;
      }
    }
    if (!exists) {
      result.push(source[s]);
    }
  }

  return result;
};

// Execution
const words = [ "hello", "world", "lighthouse" ];
const shortWords = without(words, ["lighthouse"]);

console.log(shortWords);

assertArraysEqual(words, [ "hello", "world", "lighthouse" ]);
assertArraysEqual(shortWords, [ "hello", "world", "lighthouse" ]);

const calEZ45C = [ "23701EZ45C.XCAL", "bcx", "0x80020000", 4 ];
const cal9FU5C = [ "237019FU5C.XCAL", "bcx", "0x80020000", 4 ];

const shortCalEZ45C = without(calEZ45C, [ "bcx" ]);
const shortCal9FU5C = without(cal9FU5C, [ "bcx" ]);

assertArraysEqual(calEZ45C, shortCalEZ45C);
assertArraysEqual(cal9FU5C, shortCal9FU5C);
assertArraysEqual(shortCalEZ45C, shortCal9FU5C);