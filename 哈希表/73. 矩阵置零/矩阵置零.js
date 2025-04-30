/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 使用一维数组的写法就可以写出来这个题目
  // 但是这个题目要求使用常数空间，所以我们需要使用一个额外的标记来记录第一行和第一列是否需要置零
  // 然后我们使用第一行和第一列来记录其他行和列是否需要置零
  // 最后我们根据第一行和第一列的标记来置零
  const weightlength = matrix[0].length;
  const heightlength = matrix.length;
  let weight = new Array(weightlength).fill(false);
  let height = new Array(heightlength).fill(false);
  for (let i = 0; i < heightlength; i++) {
    for (let j = 0; j < weightlength; j++) {
      if (matrix[i][j] === 0) {
        weight[j] = true;
        height[i] = true;
      }
    }
  }
  for (let i = 0; i < heightlength; i++) {
    for (let j = 0; j < weightlength; j++) {
      if (weight[j] || height[i]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};
