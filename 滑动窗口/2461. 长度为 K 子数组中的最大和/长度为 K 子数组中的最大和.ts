function maximumSubarraySum(nums: number[], k: number): number {
    let ans: number = 0;
    let sum: number = 0;
    let map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]!;
        map.set(nums[i]!, (map.get(nums[i]!) || 0) + 1);

        // 看是否达到要求
        let left: number = i - k + 1;
        if (left < 0) continue;

        if (map.size === k) {
            ans = Math.max(ans, sum);
        }

        // 左边界收缩
        const out: number = nums[left]!;
        sum -= out;
        const count: number = map.get(out)!;
        if (count > 1) {
            map.set(out, count - 1);
        } else {
            map.delete(out);
        }
    }
    return ans;
}
