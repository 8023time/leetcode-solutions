/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    /**
     * 方法一：暴力解法
     * 时间复杂度：O(n*k)
     * 空间复杂度：O(1)
     */
    // let temp: number;
    // while (k--) {
    //     temp = nums.pop() as number;
    //     nums.unshift(temp);
    // }
    /**
     * 翻转数组
     * 时间复杂度：O(n)
     * 空间复杂度：O(1)
     */
    function reverse(i, j) {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    k %= nums.length;
    // 翻转整个数组
    reverse(0, nums.length - 1);
    // 翻转前k个元素
    reverse(0, k - 1);
    // 翻转后n-k个元素
    reverse(k, nums.length - 1);
}
