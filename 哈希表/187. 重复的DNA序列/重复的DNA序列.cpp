#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
// 时间复杂度O(n)，空间复杂度O(n)

class Solution
{
public:
    vector<string> findRepeatedDnaSequences(string s)
    {
        unordered_map<string, int> repetitivestring;
        vector<string> arr;
        for (int i = 0; i + 10 <= s.size(); i++)
        {
            string temp = s.substr(i, 10);
            repetitivestring[temp]++;
            if (repetitivestring[temp] == 2)
            {
                arr.push_back(temp);
            }
        }
        return arr;
    }
};