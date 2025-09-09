function maxScore(cardPoints: number[], k: number): number {
    /**
     * 逆向思维
     */
    const n = cardPoints.length - k;
    let total = 0;
    let sum = 0;
    let minSum = Infinity;
    for (let i = 0; i < cardPoints.length; i++) {
        total += cardPoints[i]!;
        sum += cardPoints[i]!;
        if (i - n + 1 < 0) continue;
        minSum = Math.min(minSum, sum);
        sum -= cardPoints[i - n + 1]!;
    }
    if (n === 0) return total;
    return total - minSum;
}
