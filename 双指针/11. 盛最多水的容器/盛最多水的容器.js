/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 使用双指针的方法来解决
  const length = height.length;
  let area = 0;
  let left = 0;
  let rigth = length - 1;
  while (rigth > left) {
    let weigth = rigth - left;
    let up = Math.min(height[left], height[rigth]);
    let sume = up * weigth;
    area = Math.max(area, sume);
    if (height[left] > height[rigth]) {
      rigth--;
    } else {
      left++;
    }
  }
  return area;
};
