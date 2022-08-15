const assert = require('chai').assert;
const circularNumbers = require('../modules/circularNumbers');

describe('circularNumbers(position, limit)', () => {
  it('limit : 10, +1, position 7 to 8', () => {
    const test = 7;
    const correct = 8;
    const result = circularNumbers(test, 1, 10);
    assert.strictEqual(result, correct);
  });
  it('limit : 10, -1, position 7 to 6', () => {
    const test = 7;
    const correct = 6;
    const result = circularNumbers(test, -1, 10);
    assert.strictEqual(result, correct);
  });
  it('limit : 10, 1, position 10 to 0', () => {
    const test = 10;
    const correct = 0;
    const result = circularNumbers(test, 1, 10);
    assert.strictEqual(result, correct);
  });
  it('limit : 10, -1, position 0 to 10', () => {
    const test = 0;
    const correct = 10;
    const result = circularNumbers(test, -1, 10);
    assert.strictEqual(result, correct);
  });
  it('limit : 10, 12, position 0 to 1', () => {
    const test = 0;
    const correct = 1;
    const result = circularNumbers(test, 12, 10);
    assert.strictEqual(result, correct);
  });
  it('limit : 117, -5, position 117 to 112', () => {
    const test = 117;
    const correct = 112;
    const result = circularNumbers(test, -5, 117);
    assert.strictEqual(result, correct);
  });
});