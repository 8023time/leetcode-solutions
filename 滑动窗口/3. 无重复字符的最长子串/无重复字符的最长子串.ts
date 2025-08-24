function lengthOfLongestSubstring(s: string): number {
    // 采用滑动窗口来解决这个题目
    // 思路：先从开始节点向左边开始滑动窗口向右边移动，如果遇到重复的就左边开始收集
    // let start = 0, end = 0, max = 0, length = s.length;
    // let set = new Set<string>();
    // while (end < length) {
    //     if (set.has(s[end])) {
    //         set.delete(s[start]);
    //         start++
    //     } else {
    //         set.add(s[end]);
    //         end++
    //         max = Math.max(max, set.size)
    //     }
    // }
    // return max
    // // 采用滑动窗口加上优化过的map
    // let left = 0,
    //     max = 0;
    // let newCharIndex = new Array<number>(128).fill(-1); // 记录每个字符最新出现的位置
    // for (let right = 0; right < s.length; right++) {
    //     const currentCharIndex = s.charCodeAt(right); // 获取当前字符的ASCII码
    //     left = Math.max(left, newCharIndex[currentCharIndex] + 1); // 左边界向右移动
    //     newCharIndex[currentCharIndex] = right; // 更新最新出现的位置
    //     max = Math.max(max, right - left + 1); // 更新最大长度
    // }
    // return max; // 返回最大长度
    // 采用滑动窗口加上优化过的map
    let left = 0,
        max = 0,
        length = s.length;
    if (length <= 1) return length;
    const OFFSET = 32; // ASCII ' ' 起点
    const SIZE = 95; // 可打印字符数
    let newCharIndex = new Array<number>(SIZE).fill(-1); // 记录每个字符最新出现的位置
    for (let right = 0; right < length; right++) {
        const currentCharIndex = s.charCodeAt(right) - OFFSET; // 获取当前字符的ASCII码
        left = Math.max(left, newCharIndex[currentCharIndex] + 1); // 左边界向右移动
        newCharIndex[currentCharIndex] = right; // 更新最新出现的位置
        max = Math.max(max, right - left + 1); // 更新最大长度
        if (max === SIZE) return SIZE;
    }
    return max; // 返回最大长度
}
