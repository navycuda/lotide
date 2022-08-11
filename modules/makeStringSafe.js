const makeStringSafe = (string, safeString) => {
  let result = "";
  for (let s = 0; s < string.length; s++) {
    if (safeString.includes(string[s])) {
      result += string[s];
    }
  }
  return result;
};

module.exports = makeStringSafe;