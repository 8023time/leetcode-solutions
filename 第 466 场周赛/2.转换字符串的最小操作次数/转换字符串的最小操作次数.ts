function minOperations(s: string): number {
    // 这个题目就是要找最小的除了‘a'之外最大的那个数字
    let max = 0;
    const m = {
        a: 0,
        b: 25,
        c: 24,
        d: 23,
        e: 22,
        f: 21,
        g: 20,
        h: 19,
        i: 18,
        j: 17,
        k: 16,
        l: 15,
        m: 14,
        n: 13,
        o: 12,
        p: 11,
        q: 10,
        r: 9,
        s: 8,
        t: 7,
        u: 6,
        v: 5,
        w: 4,
        x: 3,
        y: 2,
        z: 1,
    };
    for (let i = 0; i < s.length; i++) {
        max = Math.max(max, m[s[i] as keyof typeof m]);
    }
    return max;
}

/**
 * 采用单调栈来解决这个题目
 */
const ans_2 = {
    minOperations(s: string): number {
        let min_char: string = String.fromCharCode("z".charCodeAt(0) + 1);
        for (const c of s) {
            if (c < min_char && c !== "a") {
                min_char = c;
            }
        }
        return "z".charCodeAt(0) - min_char.charCodeAt(0) + 1;
    },
};
