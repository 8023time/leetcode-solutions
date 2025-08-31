function findDuplicate(nums: number[]): number {
    /**
     * 思路：使用原地哈希的方法来寻找这个数据（重复的数据）
     * 1.一次遍历数据，使用原地哈希：数组中数据存储的是下标，（下标+1）
     */
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            const index = nums[i] - 1;
            if (nums[index] === nums[i]) {
                return nums[i];
            }
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    }
    return -1;
}
