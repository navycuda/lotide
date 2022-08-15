const circularNumbers = (position, change, limit) => {
  
  let result = position + change;
  console.log('result, position, change, limit', result, position, change, limit);
  while (result > limit || result < 0) {
    console.log(`  > while() result: `, result);
    if (result > limit) {
      result -= limit + 1;
    }
    if (result < 0) {
      result += limit + 1;
    }
  }
  console.log(`    >> returning :`, result);
  return result;
};

module.exports = circularNumbers;