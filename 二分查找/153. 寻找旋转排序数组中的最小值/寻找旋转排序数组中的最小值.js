/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 采用二分查找来解决这个题目
  // 思路就是通过分析归纳出来有两种情况来解决这个题目
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return nums[left];
};
