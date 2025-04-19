/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = []; // 在这里用来存储的是最后的结果
  const length = nums.length;
  if (nums === null || length < 3) return ans; // 判断这个数,如果不符合规范的话就return[]
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    // 首先判断这个数字的第一个是不是大于0,如果大于0的话,就说明的是这个不能构成三个数字加起来伟0
    if (nums[i] > 0) break;
    // 因为不能包含重复的三元组,判断一下
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = length - 1;
    while (right > left) {
      let result = nums[i] + nums[left] + nums[right];
      if (result === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (right > left && nums[left] === nums[left + 1]) left++;
        while (right > left && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (result > 0) right--;
      else if (result < 0) left++;
    }
  }
  return ans;
};
