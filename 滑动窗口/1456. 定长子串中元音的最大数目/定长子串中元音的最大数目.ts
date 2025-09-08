function maxVowels(s: string, k: number): number {
    /**
     * 定长滑动窗口
     * 1.打表，元音字母表
     * 2.初始化窗口，窗口内元音数为k
     * 3.滑动窗口,统计窗口内元音数，更新最大值
     * 4.返回最大值
     */
    if (k < 1) return 0;
    const m: Set<string> = new Set<string>(["a", "e", "i", "o", "u"]);
    // 先统计前k个字符的元音数
    let res: number = 0;
    let cur: number = 0;
    for (let i = 0; i < k; i++) {
        if (m.has(s[i]!)) cur++;
    }
    res = cur;
    // 滑动窗口
    for (let i = k; i < s.length; i++) {
        if (m.has(s[i - k]!)) {
            cur--;
        }
        if (m.has(s[i]!)) {
            cur++;
        }
        res = Math.max(res, cur);
    }

    return res;
}

/**
 * 优化：
 * 使用函数来判断是否为元音
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */
const ans_2 = {
    maxVowels(s: string, k: number): number {
        function isVowel(c: string): boolean {
            // return ["a", "e", "i", "o", "u"].includes(c);
            return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
        }
        let res: number = 0;
        let cur: number = 0;
        for (let i = 0; i < k; i++) {
            if (isVowel(s[i]!)) cur++;
        }
        res = cur;
        for (let i = k; i < s.length; i++) {
            if (isVowel(s[i - k]!)) {
                cur--;
            }
            if (isVowel(s[i]!)) {
                cur++;
            }
            res = Math.max(res, cur);
        }
        return res;
    },
};

const ans_3 = {
    maxVowels(s: string, k: number): number {
        let res: number = 0;
        let cur: number = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
                cur++;
            }

            // 记录左端点
            const left: number = i - k + 1;
            if (left < 0) {
                continue;
            }

            // 更新答案
            res = Math.max(res, cur);

            // 移除左端点,为下一次滑动窗口做准备
            const out: number =
                s[left] === "a" || s[left] === "e" || s[left] === "i" || s[left] === "o" || s[left] === "u" ? 1 : 0;
            if (out === 1) {
                cur -= out;
            }
        }
        return res;
    },
};
