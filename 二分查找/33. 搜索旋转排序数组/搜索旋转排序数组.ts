function search(nums: number[], target: number): number {
    /**
     * 方法一：分开两次二分查找
     * 首先，找到分开的点，即旋转点，然后分别在前后两部分进行二分查找
     */
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
        return right;
    }

    function binarySearch(
        nums: number[],
        target: number,
        left: number,
        right: number
    ): number {
        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    // 左边二分
    let left_l = 0;
    let left_r = findMin(nums) === 0 ? 0 : findMin(nums) - 1;
    while (left_l <= left_r) {
        const mid: number = Math.floor((left_l + left_r) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left_l = mid + 1;
        } else {
            left_r = mid - 1;
        }
    }

    // 右边二分
    let right_l = findMin(nums) === 0 ? 0 : findMin(nums);
    let right_r = nums.length - 1;
    while (right_l <= right_r) {
        const mid: number = Math.floor((right_l + right_r) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            right_l = mid + 1;
        } else {
            right_r = mid - 1;
        }
    }

    return -1;
}
