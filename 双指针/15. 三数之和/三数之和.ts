function threeSum(nums: number[]): number[][] {
    let reslut: number[][] = [];
    // 接着进行排序处理操作
    nums.sort((a, b) => a - b);
    if (nums.length < 3) return reslut;
    // 遍历数组
    for (let i = 0; i < nums.length - 2; i++) {
        const frist = nums[i];
        if (frist > 0) break;
        // 跳过重复元素
        if (i > 0 && frist === nums[i - 1]) continue;
        let left: number = i + 1;
        let right: number = nums.length - 1;
        while (left < right) {
            const sum: number = frist + nums[left] + nums[right];
            if (sum > 0) right--;
            else if (sum < 0) left++;
            else {
                reslut.push([frist, nums[left], nums[right]]);
                // 跳过重复元素
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return reslut;
}
