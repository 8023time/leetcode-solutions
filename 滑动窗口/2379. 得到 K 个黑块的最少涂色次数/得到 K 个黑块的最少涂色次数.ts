function minimumRecolors(blocks: string, k: number): number {
    let ans: number = Infinity;
    let cur: number = 0;
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i] === "W") {
            cur++;
        }

        if (i < k - 1) continue;

        // 比较
        ans = Math.min(ans, cur);

        // 移出窗口
        if (blocks[i - k + 1] === "W") {
            cur--;
        }
    }
    return ans;
}
