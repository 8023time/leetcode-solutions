function maxSubArray(nums: number[]): number {
    let ans = -Infinity;
    let minPreSum = 0;
    let preSum = 0;
    for (const x of nums) {
        preSum += x; // 当前的前缀和
        ans = Math.max(ans, preSum - minPreSum); // 减去前缀和的最小值
        minPreSum = Math.min(minPreSum, preSum); // 维护前缀和的最小值
    }
    return ans;
}
