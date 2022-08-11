const assert = require(`chai`).assert;
const makeStringSafe = require('../modules/makeStringSafe');
const ekw = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

describe(`makeStringSafe(string, "${ekw}")`, () => {
  it('"This String" === "TS"', () => {
    const test = 'This String';
    const testCorrect = 'TS';
    const testActual = makeStringSafe(test, ekw);
    assert.isTrue(testActual === testCorrect);
  });
  it('"THIS String" === "THISS"', () => {
    const test = 'THIS String';
    const testCorrect = 'THISS';
    const testActual = makeStringSafe(test, ekw);
    assert.isTrue(testActual === testCorrect);
  });
  it('"ENTERPRISE" === "ENTERPRISE"', () => {
    const test = 'ENTERPRISE';
    const testCorrect = 'ENTERPRISE';
    const testActual = makeStringSafe(test, ekw);
    assert.isTrue(testActual === testCorrect);
  });
  it('"ENTERPRISE1701" === "ENTERPRISE"', () => {
    const test = 'ENTERPRISE1701';
    const testCorrect = 'ENTERPRISE';
    const testActual = makeStringSafe(test, ekw);
    assert.isTrue(testActual === testCorrect);
  });
});