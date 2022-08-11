/* Arguments & Properties */
/* Local Functions */
const getRandomNumber = (num) => {
  return (Math.floor(Math.random() * num));
};

/* Export Functions */
const getRandomAlphanumericString = (length) => {
  const chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
  let result = '';
  for (let l = 0; l < length; l++) {
    result += chars[getRandomNumber(chars.length)];
  }
  return result;
};

/* Exports */
module.exports = getRandomAlphanumericString;