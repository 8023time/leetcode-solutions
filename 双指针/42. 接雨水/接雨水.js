/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 思路:使用双指针来实现这个功能
  let right = height.length - 1;
  let left = 0;
  let ans = 0;
  let maxleft = 0;
  let maxright = 0;
  while (right > left) {
    maxleft = Math.max(maxleft, height[left]);
    maxright = Math.max(maxright, height[right]);
    if (height[left] < height[right]) {
      ans += maxleft - height[left];
      left++;
    } else {
      ans += maxright - height[right];
      right--;
    }
  }
  return ans;
};
