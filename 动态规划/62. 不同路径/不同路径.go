func uniquePaths(m int, n int) int {
	// 使用动态规划来解决这道题目
	// 需要知道的一点就是这个题目的设置为只有向下移动或者向右移动
	// 不能向左移动以及向上移动
	// 所以对于这个题目来说在第一行以及第一列的元素来说的话
	// dp第一行以及dp第一列的都是为1的结果
	// 因为他们的路径只用一条,就是来自向右或者对于向下
	dp := make([][]int, m)
	for index, _ := range dp { // 对dp数组的第一行赋值为1
		dp[index] = make([]int, n)
		dp[index][0] = 1
	}
	// 接下来就是对dp的第一行赋值为1
	for app := 0; app < n; app++ {
		dp[0][app] = 1
	}
	// 下面就是对这个dp进行赋值处理的结果
	// 利用动态规划的公式回溯岛上一个节点的结果,目前的路径总和就是等于上一条路径的的和
	for number := 1; number < m; number++ {
		for indexnumber := 1; indexnumber < n; indexnumber++ {
			dp[number][indexnumber] = dp[number-1][indexnumber] + dp[number][indexnumber-1]
		}
	}
	return dp[m-1][n-1] // 返回的最后一个终点的的dp数组里面的值就是最后的路径总数
}