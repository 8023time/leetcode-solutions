function productExceptSelf(nums: number[]): number[] {
    /**
     * 采用前缀积与后缀积的思路
     * 前缀积：从左到右，乘积累乘
     * 后缀积：从右到左，乘积累乘
     * 结果数组：前缀积与后缀积的乘积
     */
    // const length: number = nums.length;
    // let preArray: number[] = new Array(length).fill(0);
    // let sufArray: number[] = new Array(length).fill(0);
    // let result: number[] = new Array(length).fill(0);

    // // 前缀积
    // preArray[0] = 1;
    // for (let i = 1; i < length; i++) {
    //     preArray[i] = preArray[i - 1] * nums[i - 1];
    // }

    // // 后缀积
    // sufArray[length - 1] = 1;
    // for (let i = length - 2; i >= 0; i--) {
    //     sufArray[i] = sufArray[i + 1] * nums[i + 1];
    // }

    // // 放回结果出来
    // for (let i = 0; i < length; i++) {
    //     result[i] = preArray[i] * sufArray[i];
    // }
    // return result;

    /**
     * 优化L两次循环处理操作
     */
    let length: number = nums.length;
    let sufArray: number[] = new Array(length).fill(1);

    // 后缀积
    sufArray[length - 1] = 1;
    for (let i = length - 2; i >= 0; i--) {
        sufArray[i] = sufArray[i + 1] * nums[i + 1];
    }
    // 结果数组
    let pre = 1;
    for (let i = 0; i < length; i++) {
        sufArray[i] *= pre;
        pre *= nums[i];
    }
    return sufArray;
}
