// Required
const _ = require(`../index`);
const assert = require(`chai`).assert;

// Global Functions
// Copy&Paste Functions

// Execution & Test Data
const starships = [ `USS Enterprise`, `USS Reliant`, `USS Excelsior`, `USS Yamato`, `USS Lexington`, `USS Intrepid` ];
const correctStarshipFirstLetters = [ `E`, `R`, `E`, `Y`, `L`, `I`];
const resultStarship = _.map(starships, uss => uss[4]);

const numbers = [ 1, 2, 4, 8 ];
const correctNumbers = [1, 4, 16, 64];
const sqrtNumbers = _.map(numbers, n => n * n);

const uncommissionedStarships = [ `Enterprise`, `Reliant`, `Excelsior`, `Yamato`, `Lexington`, `Intrepid` ];
const commissionedStartships = _.map(uncommissionedStarships, uss => `USS ${uss}`);

describe(`map()`, () => {
  it(`Correct Starship first Letters`, () => {
    assert.isTrue(_.eqArrays(resultStarship, correctStarshipFirstLetters));
  });
  it(`Numbers are correctly square rooted`, () => {
    assert.isTrue(_.eqArrays(sqrtNumbers, correctNumbers));
  });
  it(`Commission starships with USS`, () => {
    assert.isTrue(_.eqArrays(commissionedStartships, starships));
  });
});