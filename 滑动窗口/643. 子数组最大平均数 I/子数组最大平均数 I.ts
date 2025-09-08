function findMaxAverage(nums: number[], k: number): number {
    let sum: number = -Infinity;
    let cur: number = 0;
    for (let i = 0; i < nums.length; i++) {
        cur += nums[i]!;

        let left: number = i - k + 1;
        if (left < 0) continue;

        sum = Math.max(sum, cur);

        cur -= nums[left]!;
    }
    return sum / k;
}

const ans_2 = {
    findMaxAverage(nums: number[], k: number): number {
        let sum: number = 0;
        let cur: number = 0;
        for (let i = 0; i < k; i++) {
            cur += nums[i]!;
        }
        sum = cur;
        for (let i = k; i < nums.length; i++) {
            cur += nums[i]! - nums[i - k]!;
            sum = Math.max(sum, cur);
        }
        return sum / k;
    },
};
