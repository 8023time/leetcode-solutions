function minWindow(s: string, t: string): string {
    /**
     * 采用滑动窗口来解决这个问题
     * 维护一个滑动窗口，左右指针，窗口内字符频率表，以及答案的左右指针
     * 右指针向右移动，若窗口内字符频率表中有字符频率不足，则右指针向右移动，直到窗口内字符频率表中所有字符频率都足够
     * 若窗口内字符频率表中所有字符频率都足够，则更新答案的左右指针，并移动左指针left++
     * 重复以上过程，直到右指针到达字符串末尾
     * 最后返回答案的子串
     */
    // // 判断窗口内字符频率表是否涵盖t
    // function isCovered(
    //     s_map: Map<string, number>,
    //     t_map: Map<string, number>
    // ): boolean {
    //     for (const [char, count] of t_map.entries()) {
    //         if ((s_map.get(char) ?? 0) < count) return false;
    //     }
    //     return true;
    // }
    // const s_map: Map<string, number> = new Map<string, number>();
    // const t_map: Map<string, number> = new Map<string, number>();
    // let left: number = 0,
    //     ans_left: number = -1,
    //     ans_right: number = -1;
    // // 构建字符频率表
    // for (let i = 0; i < t.length; i++) {
    //     t_map.set(t[i], (t_map.get(t[i]) || 0) + 1);
    // }
    // // 遍历字符串s
    // for (let right = 0; right < s.length; right++) {
    //     // 维护窗口内字符频率表
    //     if (t_map.has(s[right])) {
    //         s_map.set(s[right], (s_map.get(s[right]) ?? 0) + 1);
    //     }
    //     // 若涵盖--->更新最小长度--->移动左指针left++
    //     while (isCovered(s_map, t_map)) {
    //         // 更新答案
    //         if (ans_left === -1 || right - left < ans_right - ans_left) {
    //             ans_left = left;
    //             ans_right = right;
    //         }
    //         // 维护窗口内字符频率表
    //         if (t_map.has(s[left])) {
    //             s_map.set(s[left], s_map.get(s[left])! - 1);
    //         }
    //         // 移动左指针left++
    //         left++;
    //     }
    // }
    // // 最后返回答案的子串
    // return ans_left === -1 ? "" : s.slice(ans_left, ans_right + 1);
    /** ----------------------------------------- */
    /** ---------- 优化（空间） ------------------ */
    /** ----------------------------------------- */
    /**
     * 优化：滑动窗口 + 定长哈希表数组
     * 使用定长数组代替哈希表
     */
    // // 判断窗口内字符频率表是否涵盖t
    // function isCovered(s_map: number[], t_map: number[]): boolean {
    //     for (let i = 0; i < t_map.length; i++) {
    //         if (s_map[i] < t_map[i]) return false;
    //     }
    //     return true;
    // }
    // const t_map: number[] = new Array(128).fill(0);
    // const s_map: number[] = new Array(128).fill(0);
    // let left: number = 0,
    //     ans_left: number = -1,
    //     ans_right: number = -1;
    // // 构建字符频率表
    // for (let i = 0; i < t.length; i++) {
    //     t_map[t.charCodeAt(i)]++;
    // }
    // // 遍历字符串s
    // for (let right = 0; right < s.length; right++) {
    //     // 维护窗口内字符频率表
    //     s_map[s.charCodeAt(right)]++;
    //     // 若涵盖--->更新最小长度--->移动左指针left++
    //     while (isCovered(s_map, t_map)) {
    //         // 更新答案
    //         if (ans_left === -1 || right - left < ans_right - ans_left) {
    //             ans_left = left;
    //             ans_right = right;
    //         }
    //         // 维护窗口内字符频率表
    //         s_map[s.charCodeAt(left)]--;
    //         // 移动左指针left++
    //         left++;
    //     }
    // }
    // // 最后返回答案的子串
    // return ans_left === -1 ? "" : s.slice(ans_left, ans_right + 1);
    /** ----------------------------------------- */
    /** ---------- 优化（时间） ------------------ */
    /** ----------------------------------------- */
    /**
     * 优化：滑动窗口 + 定长哈希表数组 + 优化判断涵盖函数的逻辑，不用每次遍历
     * 使用一个参数判断
     */
    // const t_map: number[] = new Array(128).fill(0);
    // const s_map: number[] = new Array(128).fill(0);
    // let left: number = 0,
    //     count: number = 0,
    //     request: number = 0,
    //     ans_left: number = -1,
    //     ans_right: number = -1;
    // // 构建字符频率表
    // for (let i = 0; i < t.length; i++) {
    //     if (t_map[t.charCodeAt(i)] === 0) request++;
    //     t_map[t.charCodeAt(i)]++;
    // }
    // // 遍历字符串s
    // for (let right = 0; right < s.length; right++) {
    //     // 维护窗口内字符频率表
    //     s_map[s.charCodeAt(right)]++;
    //     // 维护窗口内字符频率表的计数器
    //     if (s_map[s.charCodeAt(right)] === t_map[s.charCodeAt(right)]) {
    //         count++;
    //     }
    //     // 若涵盖--->更新最小长度--->移动左指针left++
    //     while (count === request) {
    //         // 更新答案
    //         if (ans_left === -1 || right - left < ans_right - ans_left) {
    //             ans_left = left;
    //             ans_right = right;
    //         }
    //         // 维护窗口内字符频率表
    //         s_map[s.charCodeAt(left)]--;
    //         // 维护窗口内字符频率表的计数器
    //         if (s_map[s.charCodeAt(left)] < t_map[s.charCodeAt(left)]) {
    //             count--;
    //         }
    //         // 移动左指针left++
    //         left++;
    //     }
    // }
    // // 最后返回答案的子串
    // return ans_left === -1 ? "" : s.slice(ans_left, ans_right + 1);
    /**
     * 最终版本
     */
    const t_map: number[] = new Array(128).fill(0);
    const s_map: number[] = new Array(128).fill(0);
    let left: number = 0,
        count: number = 0,
        request: number = 0,
        ans_left: number = -1,
        ans_right: number = -1;
    for (let i = 0; i < t.length; i++) {
        if (t_map[t.charCodeAt(i)] === 0) request++;
        t_map[t.charCodeAt(i)]++;
    }
    for (let right = 0; right < s.length; right++) {
        s_map[s.charCodeAt(right)]++;
        if (s_map[s.charCodeAt(right)] === t_map[s.charCodeAt(right)]) {
            count++;
        }
        while (count === request) {
            if (ans_left === -1 || right - left < ans_right - ans_left) {
                ans_left = left;
                ans_right = right;
            }
            s_map[s.charCodeAt(left)]--;
            if (s_map[s.charCodeAt(left)] < t_map[s.charCodeAt(left)]) {
                count--;
            }
            left++;
        }
    }
    return ans_left === -1 ? "" : s.slice(ans_left, ans_right + 1);
}
