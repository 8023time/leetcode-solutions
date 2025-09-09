function longestSubarray(nums: number[]): number {
    /**
     * 维持最多只有一个0的子数组
     */
    let left: number = 0;
    let ans: number = 0;
    let count_0: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count_0++;
        }
        while (count_0 > 1) {
            count_0 -= nums[left] === 0 ? 1 : 0;
            left++;
        }
        ans = Math.max(ans, i - left); // 因为题目的要求，必须要删除掉一个元素
    }
    return ans;
}
