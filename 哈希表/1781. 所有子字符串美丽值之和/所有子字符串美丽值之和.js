/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  // 就是使用一次遍历加上一个哈希表来解决问题
  // 使用两个嵌套for循环来解决这个问题
  let beautynumber = 0;
  for (let i = 0; i < s.length; i++) {
    let map_string = new Map();
    let max_number;
    let min_number;
    for (let j = i; j < s.length; j++) {
      max_number = 0;
      min_number = Infinity;
      let stringnumber = s[j];
      map_string.set(stringnumber, (map_string.get(stringnumber) || 0) + 1);
      for (const stringapp of map_string.values()) {
        max_number = Math.max(max_number, stringapp);
        min_number = Math.min(min_number, stringapp);
      }
      beautynumber += max_number - min_number;
    }
  }
  return beautynumber;
};
