/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 这个题目与上一个题目很类似,就是比上一个题目多出来了障碍物
  // 其中需要注意的就是如果终点以及起点如果就已经又障碍物的话,就直接返回0条路径
  // 后面就是当前路劲如果有障碍物的话就说明的是这个dp[i][j]是0
  // 表示的就是从起点到这个点i,j的总路径的条数就是0条
  // 其余的就是和62题基本没有如何区别

  // 接下来就是代码
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = new Array(m).fill().map((item) => Array(n).fill(0));
  for (let i = 0; i < m && !obstacleGrid[i][0]; ++i) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < n && !obstacleGrid[0][i]; ++i) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
