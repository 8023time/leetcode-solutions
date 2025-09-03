function candy(ratings: number[]): number {
    /**
     * 思想：需要保证每一个小朋友至少分到一颗糖果，所以献给每一个人一个糖果，
     * 从左向右遍历数组，如果当前元素比前一个元素大，则需要给当前元素多加个糖果
     * 从右向左遍历数组，如果当前元素比后一个元素大，则需要给当前元素多加个糖果
     * 最后取最大的值
     */
    const length: number = ratings.length;
    const res: number[] = new Array(length).fill(1);
    // 从左向右遍历数组
    for (let i = 1; i < length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            res[i] = res[i - 1] + 1;
        }
    }
    // 从右向左遍历数组
    for (let i = length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            res[i] = Math.max(res[i], res[i + 1] + 1);
        }
    }
    return res.reduce((acc, cur) => acc + cur, 0);
}
