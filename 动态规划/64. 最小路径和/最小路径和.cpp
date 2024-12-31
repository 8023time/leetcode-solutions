#include<iostream>
#include<vector>
using namespace std;
// 上面的头文件与题解无光,只是为了在本地编译器里不报错

class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        // 在这个问题中,需要注意的就是第一行与第一列的值的路径是唯一确定的,可以先把这些值表示出来
        // 接着由于dp[i][j]的数据来源于上一个数据,也就是左边或者上面的数据的最小的那个值

        // 接下来就是代码
        int height = grid.size();
        int weight = grid[0].size();
        vector<vector<int>> dp(height, vector<int>(weight, 0)); // 初始化dp数组
        dp[0][0] = grid[0][0]; // 初始化起点的节点
        for (int i = 1; i < height; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
        for (int i = 1; i < weight; i++) {
            dp[0][i] = dp[0][i - 1] + grid[0][i];
        }
        // 下面就是对这个dp进行遍历
        for (int i = 1; i < height; i++) {
            for (int j = 1; j < weight; j++) {
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }
        return dp[height - 1][weight - 1];
    }
};