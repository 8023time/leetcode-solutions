/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //采用二分查找来解决这个题目,
  // 条件一   升序
  // 条件而  进行一次旋转
  // 条件三  数组中不存在重复的元素
  // 条件四  时间复杂度为O(logn)

  // 首先判断是否有序,其次再判断是否在有序的区间内,如果不在,就在另外一边的无序区间内
  // 因为这个题目保证了这个题目至少一边的区间时有序的

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    // 判断是不是有序的区间
    if (nums[left] <= nums[middle]) {
      // 该区间是有序的区间
      if (nums[left] <= target && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 说明右边的区间是有序的
      if (nums[middle] < target && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
};
