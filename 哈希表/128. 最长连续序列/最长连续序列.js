/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 这个题目的解题思路就是先把数组加到哈希表中去
    // 通过哈希表的查找,因为哈希表的查找是O(1)的复杂度
    let ansnumber = 0
    const numsset = new Set(nums)
    for (const number of numsset) {
        if (numsset.has(number - 1)) { // 如果有比这个数小一点的数就跳过
            continue
        }
        let nextnumber = number + 1
        while (numsset.has(nextnumber)) {
            nextnumber++
        }
        ansnumber = Math.max(ansnumber, nextnumber - number) // 更新值
    }
    return ansnumber
};