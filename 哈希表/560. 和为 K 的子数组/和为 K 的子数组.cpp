#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;
// 上面的头文件与题解无光,只是为了在本地编译器里不报错

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int arrnums = 0;
        int numsnumber = 0; // 记录符合条件的子数组数量
        unordered_map<int, int> addnumber;
        addnumber[arrnums] = 1; // 在这里添加一个0值，表示前缀和为0的次数
        for (int i = 0; i < nums.size(); i++) { // 计算前缀和
            arrnums += nums[i];
            int number = arrnums - k;
            // 如果前缀和减去k的值存在，则说明找到了满足条件的子数组
            if (addnumber.find(number) != addnumber.end()) {
                numsnumber += addnumber[number];
            }
            addnumber[arrnums]++;
        }
        return numsnumber;
    }
};