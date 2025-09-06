function insert(intervals: number[][], newInterval: number[]): number[][] {
    let result: number[][] = [];
    let index: number = 0;

    // 在左边---没有交集的部分
    while (index < intervals.length && intervals[index][1] < newInterval[0]) {
        result.push(intervals[index]);
        index++;
    }

    // 在有交集的部分
    while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[index][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[index][1], newInterval[1]);
        index++;
    }
    result.push(newInterval);

    // 在右边---没有交集的部分
    while (index < intervals.length) {
        result.push(intervals[index]);
        index++;
    }

    return result;
}
