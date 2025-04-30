/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  // 使用map哈希来解决这个题目就OK了
  let newmap = new Map();
  for (const tempstring of cpdomains) {
    let temp = tempstring.split(" ");
    let number = parseInt(temp[0]);
    let stringarr = temp[1].split(".");
    let keystring = "";
    for (let i = stringarr.length - 1; i >= 0; i--) {
      keystring = stringarr[i] + (keystring ? "." + keystring : "");
      newmap.set(keystring, (newmap.get(keystring) || 0) + number);
    }
  }
  // 下面就是对这些东西进行输出整理
  let numsstring = [];
  for (const [key, value] of newmap.entries()) {
    numsstring.push(`${value} ${key}`);
  }
  return numsstring;
};
