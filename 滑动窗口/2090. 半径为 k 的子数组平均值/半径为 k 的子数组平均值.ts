function getAverages(nums: number[], k: number): number[] {
    /**
     * 思路：
     * 采用滑动窗口的解法来解决这个题目
     */
    let res: number[] = new Array(nums.length).fill(-1);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]!;
        // 窗口不足 2 * k + 1，则不计算
        if (i < 2 * k) continue;

        // 计算
        res[i - k] = Math.floor(sum / (2 * k + 1));

        // 移动窗口
        sum -= nums[i - 2 * k]!;
    }
    return res;
}
