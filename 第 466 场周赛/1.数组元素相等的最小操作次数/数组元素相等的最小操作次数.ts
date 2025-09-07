function minOperations(nums: number[]): number {
    /**
     * 答案只能是0或者1
     */
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            return 1;
        }
    }
    return 0;
}

/**
 * 或者使用set容器来解决这个题目
 */
const ans_1 = {
    minOperations(nums: number[]): number {
        if (new Set(nums).size === 1) return 0;
        return 1;
    },
};
