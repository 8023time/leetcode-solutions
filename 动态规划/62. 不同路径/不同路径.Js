/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // 使用动态规划来解决这道题目
    // 需要知道的一点就是这个题目的设置为只有向下移动或者向右移动
    // 不能向左移动以及向上移动
    // 所以对于这个题目来说在第一行以及第一列的元素来说的话
    // dp第一行以及dp第一列的都是为1的结果
    // 因为他们的路径只用一条,就是来自向右或者对于向下
    // 接下来就是对JavaScript使用dp动态规划
    let dp = new Array(m)
    // 下面就是创建出来一个二维的数组出来
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0)
    }
    // 对这个数组的第一行以及第一列进行赋值为1的操作
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 1
    }
    // 下面就是对这个dp进行求解的过程
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m-1][n-1]
};