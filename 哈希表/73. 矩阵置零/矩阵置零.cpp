#include<iostream>
#include<vector>
using namespace std;
// 上面的头文件与题解无光,只是为了在本地编译器里不报错

class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int weightlength = matrix[0].size();
        int heightlength = matrix.size();
        vector<bool>weiight(weightlength,false);
        vector<bool>height(heightlength,false);
        for(int i=0;i<heightlength;i++){
            for(int j=0;j<weightlength;j++){
                if(matrix[i][j]==0){
                    weiight[j]=true;
                    height[i]=true;
                }
            }
        }
        for(int i=0;i<heightlength;i++){
            for(int j=0;j<weightlength;j++){
                if(weiight[j]||height[i]){
                    matrix[i][j]=0;
                }
            }
        }
    }
};