function maximumLengthSubstring(s: string): number {
    let res: number = 0;
    let map: Map<string, number> = new Map();
    let left: number = 0;
    for (let right: number = 0; right < s.length; right++) {
        map.set(s[right]!, (map.get(s[right]!) || 0) + 1);
        while (map.has(s[right]!) && map.get(s[right]!)! > 2) {
            map.set(s[left]!, (map.get(s[left]!) || 0) - 1);
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
}
