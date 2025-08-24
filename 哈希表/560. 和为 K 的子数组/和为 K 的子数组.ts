function subarraySum(nums: number[], k: number): number {
    /**
     * 暴力解法
     * 枚举所有子数组，计算子数组的和，判断和是否等于 k
     * 时间复杂度 O(n^3)
     */
    // let count = 0;
    // for (let a = 0; a < nums.length; a++) {
    //     let value = 0;
    //     for (let i = a; i < nums.length; i++) {
    //         value += nums[i];
    //         if (value === k) {
    //             count++;
    //         }
    //     }
    // }
    // return count;
    /**
     * 使用前准和还解决这个题目
     */
    // let addvalue: number[] = new Array<number>(nums.length + 1).fill(0);
    // let count: number = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     addvalue[i + 1] = addvalue[i] + nums[i];
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j <= nums.length; j++) {
    //         if (addvalue[j] - addvalue[i] === k) {
    //             count++;
    //         }
    //     }
    // }
    // return count;

    let count: number = 0;
    let numsvalue: number = 0;
    let map: Map<number, number> = new Map<number, number>();
    map.set(0, 1); // 初始化前缀和=0 出现一次

    for (const number of nums) {
        numsvalue += number;
        if (map.has(numsvalue - k)) {
            count += map.get(numsvalue - k)!;
        }
        map.set(numsvalue, (map.get(numsvalue) || 0) + 1);
    }

    return count;
}
