/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
    // 采用暴力解法的代码
    /*
    // 思路就是处死用暴力解法来解决
    // 一个for循环里面还有两个for循环,利用map哈希表来解决这个问题
    let nums = 0 // 最后`的答案
    let length = s.length
    for (let i = 1; i < length; i++) {
        // 划分字符串为左右两部分
        let leftstring = s.slice(0, i)
        let rightstring = s.slice(i)
        // 创建哈希表记录左右两部分的字符频率
        let leftmap = new Map()
        let rightmap = new Map()
        // 遍历左侧部分，更新左侧哈希表
        for (let k = 0; k < leftstring.length; k++) {
            leftmap.set(leftstring[k], (rightmap.get(leftstring[k]) || 0) + 1)
        }
        // 遍历右侧部分，更新右侧哈希表
        for (let j = 0; j < rightstring.length; j++) {
            rightmap.set(rightstring[j], (rightmap.get(rightstring[j]) || 0) + 1)
        }
        // 如果左右两部分的唯一字符数量相等，则计数+1
        if (leftmap.size === rightmap.size) {
            nums++
        }
    }
    return nums
    */

    // 优化后的代码
    let sune = 0
    let leftmap = new Map()
    let rightmap = new Map()
    // 一次for循环统计这个字符串中的字符出现的频率
    for (const item of s) {
        rightmap.set(item, (rightmap.get(item) || 0) + 1)
    }
    // 后面就是一个最后的for循环
    for (const item of s) {
        leftmap.set(item, (leftmap.get(item) || 0) + 1)
        if (rightmap.get(item) === 1) {
            rightmap.delete(item)
        } else {
            rightmap.set(item, rightmap.get(item) - 1)
        }
        if (leftmap.size === rightmap.size) {
            sune++
        }
    }
    return sune
};