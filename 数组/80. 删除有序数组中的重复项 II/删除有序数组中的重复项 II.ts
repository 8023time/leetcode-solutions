function removeDuplicates(nums: number[]): number {
    /**
     * 思路：将这个数组直接当作一个栈来使用
     */
    let stackSize = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[stackSize - 2]) {
            nums[stackSize] = nums[i];
            stackSize++;
        }
    }
    return Math.min(stackSize, nums.length);
}
