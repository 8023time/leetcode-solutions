function searchRange(nums: number[], target: number): number[] {
    /**
     * 需要两个函数来帮忙解决这个问题，一个是查找第一个位置，一个是查找最后一个位置。
     * 首先，我们可以用二分查找法查找第一个位置，如果找到了，我们再用二分查找法查找最后一个位置。
     * 但是，如果没有找到，我们就只能返回 [-1, -1]。
     */
    function searchStart(nums: number[], target: number): number {
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return nums[left] === target ? left : -1;
    }

    function searchEnd(nums: number[], target: number): number {
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return nums[right] === target ? right : -1;
    }

    return [searchStart(nums, target), searchEnd(nums, target)];
}
