#include<iostream>
#include<vector>
#include<unordered_set>
using namespace std;
// 时间复杂度O(n)，空间复杂度O(n)

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numsSet(nums.begin(), nums.end());
        int ansNumber = 0;
        for (int number : numsSet) {
            // 如果有比当前数小的数，跳过
            if (numsSet.find(number - 1) != numsSet.end())
                continue;
            int nextNumber = number + 1;
            while (numsSet.find(nextNumber) != numsSet.end())
                nextNumber++;
            ansNumber = max(ansNumber, nextNumber - number); // 更新最大长度
        }
        return ansNumber;
    }
};