function merge(intervals: number[][]): number[][] {
    /**
     * 首先先进行排序，排序的依据是区间的左端点
     * 然后遍历数组，如果当前区间的左端点小于等于上一个区间的右端点，则合并两个区间
     * 否则，将上一个区间加入结果数组，并更新上一个区间为当前区间
     * 最后将当前区间加入结果数组
     */
    let result: number[][] = [];
    intervals.sort((a, b) => a[0] - b[0]);
    for (const interval of intervals) {
        const length = result.length;
        if (length && interval[0] <= result[length - 1][1]) {
            // 更新右端点
            result[length - 1][1] = Math.max(
                result[length - 1][1],
                interval[1]
            );
        } else {
            result.push(interval);
        }
    }
    return result;
}
