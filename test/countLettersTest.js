// Execution
const lhith = "lighthouse in the house";
const correct = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
const letterCount = countLetters(lhith);
console.log(countLetters(lhith));
// forgot to use assertEqual!
for (const letter in letterCount) {
  assertEqual(letterCount[letter], correct[letter]);
}