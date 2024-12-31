/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    // 在这个问题中,需要注意的就是第一行与第一列的值的路径是唯一确定的,可以先把这些值表示出来
    // 接着由于dp[i][j]的数据来源于上一个数据,也就是左边或者上面的数据的最小的那个值

    // 接下来就是代码
    const rows = grid.length;
    const cols = grid[0].length;
    // 初始化 dp 数组
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0))
    dp[0][0] = grid[0][0]
    // 初始化第一列
    for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    // 初始化第一行
    for (let j = 1; j < cols; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }
    // 填充 dp 数组
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    // 返回右下角的最小路径和
    return dp[rows - 1][cols - 1]
};