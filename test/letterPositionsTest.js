// Execution
//                    10        20
//           012345678901234567890123456
const isv = "Cummins 5.0L TurboDiesel V8";
const isvIndices = {
  '0': [ 10 ],
  '5': [ 8 ],
  '8': [ 26 ],
  C: [ 0 ],
  u: [ 1, 14 ],
  m: [ 2, 3 ],
  i: [ 4, 19],
  n: [ 5 ],
  s: [ 6, 21 ],
  '.': [ 9 ],
  L: [ 11 ],
  T: [ 13 ],
  r: [ 15 ],
  b: [ 16 ],
  o: [ 17 ],
  D: [ 18 ],
  e: [ 20, 22],
  l: [ 23 ],
  V: [ 25 ]
};
const isvObj = letterPositions(isv);

const lighthouse = "lighthouse in the house";
const lighthouseIndices = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};
const lighthouseObj = letterPositions(lighthouse);

assertArraysEqual(isvObj, isvIndices);
assertArraysEqual(lighthouseObj, lighthouseIndices);