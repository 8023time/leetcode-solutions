/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 采用二分查找的做法来解决这个问题
  let left = 0;
  let right = nums.length - 1;
  let frist_site = get_number(nums, target);
  let last_site = get_number_last(nums, target);
  if (frist_site == nums.length || nums[frist_site] != target) {
    return [-1, -1];
  } else if (nums[last_site] != target) {
    return [frist_site, frist_site];
  } else {
    return [frist_site, last_site];
  }
};

// 获取第一个大于等于target的值
const get_number = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] >= target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
};
//获取最后一个大于等于target的值
const get_number_last = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return right;
};
