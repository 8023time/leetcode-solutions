function minSubArrayLen(target: number, nums: number[]): number {
    /**
     * 暴力解法
     */
    // 略

    /**
     * 滑动窗口---类似于双指针左右维护一个窗口
     */
    let left: number = 0,
        sum: number = 0,
        result: number = Infinity;
    for (const [index, value] of nums.entries()) {
        sum += value;
        while (sum >= target) {
            result = Math.min(result, index - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return result === Infinity ? 0 : result;
}
