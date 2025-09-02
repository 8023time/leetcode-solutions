function maxProfit(prices: number[]): number {
    /**
     * 思路：采用贪心算法，如果当天的价格高于昨天的价格，则卖出
     */
    let maxProfit: number = 0;
    for (let i = 1; i < prices.length; i++) {
        const profit: number = prices[i] - prices[i - 1];
        if (profit > 0) {
            maxProfit += profit;
        }
    }
    return maxProfit;
}
