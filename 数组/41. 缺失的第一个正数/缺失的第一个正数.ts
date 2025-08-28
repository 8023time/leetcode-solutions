function firstMissingPositive(nums: number[]): number {
    /**
     * 思路：
     * 因为要求只能使用时间复杂度为O(n),空间复杂度为O(1)的算法
     * 所以不能使用排序来实现这个算法O(nlogn)
     * 以及不能使用new Map()来写(因为空间复杂度为O(n))
     *
     * 因此，可以使用原来的数组作为哈希表来写这个题目完成
     * 首先求出数组长度
     * 接着遍历数组，数据1放到数组下标为0的位置，数据2放到数组下标为1的位置，以此类推，如果不满足就不动
     * 最后遍历数组，如果遇到下标为i的位置不是i+1，则返回i+1，否则返回数组长度+1
     * 因为数组下标从0开始，所以数组长度+1就是第一个缺失的正数
     */
    const n: number = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] >= 1 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            const index: number = nums[i] - 1;
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
}
