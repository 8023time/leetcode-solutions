function maxProfit(prices: number[]): number {
    /**
     * 思路：
     * 遍历数据，记录当前已经遍历的最小值，同时根据最小值与当前值之间的差值计算最大利润
     * 时间复杂度：O(n)
     * 空间复杂度：O(1)
     */
    let minPrice = prices[0];
    let maxProfit = 0;
    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}
