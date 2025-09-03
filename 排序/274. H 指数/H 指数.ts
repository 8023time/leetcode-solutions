function hIndex(citations: number[]): number {
    /**
     * 思路：
     * 首先进行O(nlogn)排序
     * 进行一次遍历判断
     */
    citations.sort((a, b) => b - a);
    let ans: number = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            ans = i + 1;
        }
    }
    return ans;
}
