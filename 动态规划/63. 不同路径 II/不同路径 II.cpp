#include<iostream>
#include<vector>
using namespace std;
// 上面的头文件与题解无光,只是为了在本地编译器里不报错

class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        // 这个题目与上一个题目很类似,就是比上一个题目多出来了障碍物
        // 其中需要注意的就是如果终点以及起点如果就已经又障碍物的话,就直接返回0条路径
        // 后面就是当前路劲如果有障碍物的话就说明的是这个dp[i][j]是0
        // 表示的就是从起点到这个点i,j的总路径的条数就是0条
        // 其余的就是和62题基本没有如何区别

        // 接下来就是代码
        int height = obstacleGrid.size();
        int weight = obstacleGrid[0].size();
        vector<vector<int>> dp(height, vector<int>(weight, 0)); // 初始化dp数组
        if (obstacleGrid[0][0] == 1 ||
            obstacleGrid[height - 1][weight - 1] == 1) {
            return 0;
        }
        dp[0][0] = 1; // 初始化起点的节点的路径数为1
        for (int i = 1; i < height && !obstacleGrid[i][0]; i++) { // 注意这里是继承上一个节点的,如果又障碍物就没法继承了
            dp[i][0] = 1;
        }
        for (int i = 1; i < weight && !obstacleGrid[0][i]; i++) { // 注意这里是继承上一个节点的,如果又障碍物就没法继承了
            dp[0][i] = 1;
        }
        // 下面就是对这个dp进行遍历
        for (int i = 1; i < height; i++) {
            for (int j = 1; j < weight; j++) {
                if (obstacleGrid[i][j] == 1) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }
        }
        return dp[height - 1][weight - 1];
    }
};