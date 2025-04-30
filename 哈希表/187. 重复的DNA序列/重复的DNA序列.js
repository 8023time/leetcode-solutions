/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let repetitivestring = new Map();
  let arr = [];
  let temp;
  for (let i = 0; i + 10 <= s.length; i++) {
    temp = s.slice(i, i + 10);
    repetitivestring.set(temp, (repetitivestring.get(temp) || 0) + 1);
    if (repetitivestring.get(temp) === 2) {
      arr.push(temp);
    }
  }
  return arr;
};
