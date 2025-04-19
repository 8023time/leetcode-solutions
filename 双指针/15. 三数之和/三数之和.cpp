#include <vector>
#include<iostream>
#include <algorithm>
using namespace std;

class Solution {
    public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> finallyvalue;
        int length = nums.size();
        for (int i = 0; i < length-2;i++) {
            int targetvalue = -nums[i];
            int left = i + 1;
            int right = length - 1;
            if(nums[i] + nums[i+1] + nums[i+2] > 0) break;
            if(nums[i] + nums[length-1] + nums[length-2] < 0) continue;
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            while (left < right) {
                int value = nums[left] + nums[right];
                if (value < targetvalue) {
                    left++;
                } else if (value > targetvalue) {
                    right--;
                } else {
                    finallyvalue.push_back({nums[i], nums[left], nums[right]});
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                }
            }
        }
        return finallyvalue;
        }
    };