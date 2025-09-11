function equalSubstring(s: string, t: string, maxCost: number): number {
    let costArry: number[] = new Array(s.length).fill(0);
    let left: number = 0;
    let max_len: number = 0;
    let sume: number = 0;

    for (let i = 0; i < s.length; i++) {
        costArry[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }

    for (let i = 0; i < s.length; i++) {
        sume += costArry[i]!;
        while (sume > maxCost && left <= i) {
            sume -= costArry[left]!;
            left++;
        }
        max_len = Math.max(max_len, i - left + 1);
    }
    return max_len;
}
