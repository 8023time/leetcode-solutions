function findMin(nums: number[]): number {
    /**
     * 思路：
     * 找到中间点的值，如果中间值大于最右边的数值，说明中间值在第一段数据段中，最小值在右边
     * 如果中间值小于最右边的数值，说明中间值在第二段数据段中，最小值在左边，或者只有一段数据段，最小值在最左边
     */
    let left: number = 0;
    let right: number = nums.length - 1;
    while (left < right) {
        const mid: number = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }   
    }
    return nums[right];
}
