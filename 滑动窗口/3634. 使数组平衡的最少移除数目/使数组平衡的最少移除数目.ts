function minRemoval(nums: number[], k: number): number {
    /**
     * 思路就是找到最长的连续子数组
     */
    let left: number = 0;
    let max_number: number = 0;
    nums.sort((a, b) => a - b); //从小到大开始排列、
    for (let right = 0; right < nums.length; right++) {
        while (nums[left]! * k < nums[right]!) {
            left++;
        }
        max_number = Math.max(max_number, right - left + 1);
    }
    return nums.length - max_number;
}
