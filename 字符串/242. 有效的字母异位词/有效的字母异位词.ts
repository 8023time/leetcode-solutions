function isAnagram(s: string, t: string): boolean {
    /**
     * 哈希---三次遍历解决
     */
    if (s.length !== t.length) return false;
    const map: Map<string, number> = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) return false;
        if (map.get(t[i]) === 0) return false;
        map.set(t[i], map.get(t[i])! - 1);
    }

    for (let key of map.keys()) {
        if (map.get(key) !== 0) return false;
    }

    return true;
}

const ans_2 = {
    visAnagram(s: string, t: string): boolean {
        const arr: number[] = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            arr[s.charCodeAt(i) - 97]++;
        }
        for (let i = 0; i < t.length; i++) {
            arr[t.charCodeAt(i) - 97]--;
        }
        return arr.every((item) => item === 0);
    },
};
