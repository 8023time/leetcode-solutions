#include <iostream>
#include <vector>
using namespace std;

class Solution {
    public:
        vector<int> twoSum(vector<int>& numbers, int target) {
            int left = 0;
            int right = numbers.size() - 1;
            while(left <right){
                int sume = numbers[left] + numbers[right];
                if(sume == target){
                   break;
                }else if(sume > target){
                    right--; 
                }else{
                    left++;
                }
            }
            return {left + 1, right + 1};
        }
    };