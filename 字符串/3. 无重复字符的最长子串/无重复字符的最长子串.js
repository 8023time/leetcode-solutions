/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 思路：滑动窗口, 记录当前窗口内的字符集合，并移动窗口的左边界，直到窗口内的字符集合不包含重复的字符。
    let length = s.length;
    let max_number = 0;
    let start = 0;
    let end = 0;
    let char_set = new Set();
    while (end < length) {
        if (char_set.has(s[end])) {
            char_set.delete(s[start]);
            start++;
        } else {
            char_set.add(s[end]);
            end++;
            max_number = Math.max(max_number, end - start);
        }
    }
    return max_number;
};
