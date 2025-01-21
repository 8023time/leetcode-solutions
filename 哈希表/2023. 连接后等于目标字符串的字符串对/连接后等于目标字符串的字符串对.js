/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
    // 采用哈希表加上暴力的解法来解决这个题目
    let map = new Map() // 用来记录拼接字符串的出现次数
    // 采用暴力的解法
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            // 还要排除掉当前对应的值
            if (i === j) continue
            map.set(nums[i] + nums[j], (map.get(nums[i] + nums[j]) || 0) + 1)
        }
    }
    // 最后查看是否有target在哈希表中,并且返回相应的出现次数
    return map.get(target) || 0 // 注意到最后如果没有值的话就返回0,如果没有 || 0 : undefined
};