function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) return true; // 空字符串是任意字符串的子序列

    let index: number = 0; // 子序列的当前索引ss
    for (const char of t) {
        if (char === s[index] && ++index === s.length) return true; // 找到了子序列的最后一个字符，说明找到了子序列
    }
    return false; // 子序列没找到
}

/**
 * 使用双指针
 */

/**
 * 使用动态规划
 */
