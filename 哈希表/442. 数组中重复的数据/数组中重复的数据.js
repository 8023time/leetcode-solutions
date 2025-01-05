/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // 使用哈希表来完成这道题目
    // 使用JavaScript中的set容器
    let repedtitivenumber = new Set()
    let result = []
    for(let number of nums){
        if(repedtitivenumber.has(number)){
            result.push(number)
        }else{
            repedtitivenumber.add(number)
        }
    } 
    return result
};