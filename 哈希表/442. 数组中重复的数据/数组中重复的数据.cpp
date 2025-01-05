#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
// 时间复杂度O(n)，空间复杂度O(n)

class Solution
{
public:
    vector<int> findDuplicates(vector<int> &nums)
    {
        vector<int> arr;
        unordered_set<int> repetitivenumber;
        for (auto data : nums)
        {
            if (repetitivenumber.count(data))
            {
                arr.push_back(data);
            }
            repetitivenumber.insert(data);
        }
        return arr;
    }
};