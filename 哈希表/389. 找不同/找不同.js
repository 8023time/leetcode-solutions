/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // const count = {};
  // for (const char of s) {
  //     count[char] = (count[char] || 0) + 1;
  // }
  // for (const char of t) {
  //     if (!count[char]) {
  //         return char;
  //     }
  //     count[char]--;
  // }

  let sumS = 0,
    sumT = 0;
  for (const char of s) {
    sumS += char.charCodeAt(0);
  }
  for (const char of t) {
    sumT += char.charCodeAt(0);
  }
  return String.fromCharCode(sumT - sumS);
};
