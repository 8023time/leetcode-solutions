#include<iostream>
#include<vector>
using namespace std;
// 上面的头文件与题解无光,只是为了在本地编译器里不报错

class Solution {
public:
    int uniquePaths(int m, int n) { 
    // 使用动态规划来解决这道题目
	// 需要知道的一点就是这个题目的设置为只有向下移动或者向右移动
	// 不能向左移动以及向上移动
	// 所以对于这个题目来说在第一行以及第一列的元素来说的话
	// dp第一行以及dp第一列的都是为1的结果
	// 因为他们的路径只用一条,就是来自向右或者对于向下
        vector<vector<int>> dp(m, vector<int>(n, 0));
        for (int i = 0; i < m; i++)
            dp[i][0] = 1;
        for (int i = 0; i < n; i++)
            dp[0][i] = 1;
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }
};