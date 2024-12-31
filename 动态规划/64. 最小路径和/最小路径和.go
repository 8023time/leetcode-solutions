func minPathSum(grid [][]int) int {
	// 需要注意的是这个题目的移动路径是想左以及向右移动,不能向下移动以及向右移动
	// 这个题目首先对第一行以及第一列进行赋值
	// 接下来就是对除了第一行以及第一列其他的内容进行dp操作
	height, weight := len(grid), len(grid[0])
	dp := make([][]int, height)
	// 初始化这个dp数组
	for i := 0; i < height; i++ {
		dp[i] = make([]int, weight)
	}
	dp[0][0] = grid[0][0]
	for i := 1; i < height; i++ {
		dp[i][0] = dp[i-1][0] + grid[i][0]
	}
	for j := 1; j < weight; j++ {
		dp[0][j] = dp[0][j-1] + grid[0][j]
	}
	for i := 1; i < height; i++ {
		for j := 1; j < weight; j++ {
			dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
		}
	}
	return dp[height-1][weight-1]
}