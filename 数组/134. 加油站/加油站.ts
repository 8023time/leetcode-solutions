function canCompleteCircuit(gas: number[], cost: number[]): number {
    /**
     * 思路：
     * 1.想象一个之折线图：油量的折线变化图，重复画这个折线图，会发现在油量最低的时候，找到两边相连接起来，这个链接的直线就是x轴，如果总油量还有剩余，就可以实现一圈
     */
    let ans: number = 0;
    let total: number = 0;
    let min_total: number = 0;
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        if (min_total > total) {
            min_total = total;
            ans = i + 1;
        }
    }
    return total >= 0 ? ans : -1;
}
