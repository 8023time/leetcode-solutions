function numberOfPairs(points: number[][]): number {
    /**
     * 思路：采用枚举 + 排序
     * 1.排序：横坐标进行排序
     * 2.枚举：两次for循环 + if判断
     */
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let count: number = 0;
    for (let i = 0; i < points.length - 1; i++) {
        const y1: number = points[i][1]; // 第i个点的纵坐标 --- y
        let max_y: number = -Infinity; // 最大的纵坐标
        for (let j = i + 1; j < points.length && y1 >= max_y; j++) {
            const y2 = points[j][1]; // 第j个点的纵坐标 --- y
            if (max_y < y2 && y2 <= y1) {
                max_y = y2; // 更新最大的纵坐标
                count++; // 方案数+1
            }
        }
    }
    return count;   
}
