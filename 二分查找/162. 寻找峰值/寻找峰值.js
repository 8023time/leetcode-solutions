/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // 采用二分来解决这个`问题
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[middle + 1]) {
      right = middle;
    } else {
      left = middle - 1;
    }
  }
  return left;
};
