function findAnagrams(s: string, p: string): number[] {
    /**
     * 暴力
     * 排序后比较字符串，时间复杂度：O(N * 2Logn)
     * 遍历字符串s，每次取出p长度的子串，排序后与p进行比较，相同则记录下标，时间复杂度：O(N * 2Logn)
     * `sort()` 方法的时间复杂度为 O(nlogn)，因此总时间复杂度为 O(N * 2Logn)
     * 空间复杂度：O(1)
     */
    // let p_length: number = p.length;
    // let s_length: number = s.length;
    // let p_string = p.split("").sort().join("");
    // let result: number[] = [];
    // for (let i = 0; i < s_length - p_length + 1; i++) {
    //     let sub_str: string = s
    //         .slice(i, i + p_length)
    //         .split("")
    //         .sort()
    //         .join("");
    //     if (sub_str === p_string) {
    //         result.push(i);
    //     }
    // }
    // return result;
    /**
     * 定长滑窗
     * 统计字符串p中每个字符出现的次数（小写字母）
     * 遍历字符串s，统计s中每个字符出现的次数，并与p中字符出现的次数进行比较，如果相同，则找到一个字母异位词，记录其下标并返回
     * 时间复杂度：O(N)
     * 空间复杂度：O(1)
     */
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    const res: number[] = [];
    for (const c of p) {
        pCount[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    function arraysEqual(a: number[], b: number[]): boolean {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    for (let i = 0; i < s.length; i++) {
        sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
        const left = i - p.length + 1;
        if (left < 0) continue;
        if (arraysEqual(sCount, pCount)) {
            res.push(left);
        }
        sCount[s[left].charCodeAt(0) - "a".charCodeAt(0)]--;
    }
    return res;
}
