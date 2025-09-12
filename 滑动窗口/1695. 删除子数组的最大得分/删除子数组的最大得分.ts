function maximumUniqueSubarray(nums: number[]): number {
    /**
     * map + 滑动窗口
     */
    let set: Set<number> = new Set();
    let max_value: number = 0;
    let cur_value: number = 0;
    let left: number = 0;

    for (let i = 0; i < nums.length; i++) {
        while (set.has(nums[i]!)) {
            cur_value -= nums[left]!;
            set.delete(nums[left]!);
            left++;
        }

        set.add(nums[i]!);
        cur_value += nums[i]!;
        max_value = Math.max(max_value, cur_value);
    }
    return max_value;
}
