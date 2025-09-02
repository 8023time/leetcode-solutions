function jump(nums: number[]): number {
    /**
     * 思路：每次都选择最大的那个跳跃距离
     */
    let min_count = 0;
    let current_count = 0;
    let next_max = 0;
    for (const [index, value] of nums.entries()) {
        if (index === nums.length - 1) return min_count;
        next_max = Math.max(next_max, index + value);
        if (current_count === index) {
            current_count = next_max;
            min_count++;
        }
    }
    return min_count;
}
