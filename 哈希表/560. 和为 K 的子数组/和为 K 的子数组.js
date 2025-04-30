/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // 思路就是通过一个前缀和加上一个哈希表来计算这个题目
  let length = nums.length;
  let arrnums = 0; // 记录前缀和的
  let numsnumber = 0; // 记录有多少子数组的
  let addnumber = new Map();
  addnumber.set(arrnums, 1); // 在这里添加一个0值的真正目的就是为了表示出来如果这个值得值=0,表示的就是这个前缀和为目标数,既是在这个的基础上再加1
  for (let i = 0; i < length; i++) {
    // 计算它的前缀和
    arrnums = arrnums + nums[i];
    let number = arrnums - k;
    // 因为前缀和中一个前缀和的值减去另一个前缀和的值如果等于k的话,就说明的是在这个范围中有着这个满足条件的连续的数组
    if (addnumber.has(number)) {
      numsnumber += addnumber.get(number);
    }
    addnumber.set(arrnums, (addnumber.get(arrnums) || 0) + 1); // 这里的目的就是为了保存前缀和相同的个数
  }
  return numsnumber;
};
