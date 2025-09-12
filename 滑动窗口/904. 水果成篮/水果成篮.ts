function totalFruit(fruits: number[]): number {
    /**
     * 思路：
     * 维护一个窗口，窗口内的元素种类最多为 2，窗口左边界 left，右边界 right。
     * 使用map来记录窗口内元素的种类及数量。
     */
    let map: Map<number, number> = new Map();
    let left: number = 0;
    let max_value: number = 0;

    for (let i = 0; i < fruits.length; i++) {
        // 进入窗口
        map.set(fruits[i]!, (map.get(fruits[i]!) || 0) + 1);
        while (map.size > 2) {
            map.set(fruits[left]!, (map.get(fruits[left]!) || 0) - 1);
            if (map.get(fruits[left]!) === 0) {
                map.delete(fruits[left]!);
            }
            left++;
        }

        max_value = Math.max(max_value, i - left + 1);
    }

    return max_value;
}
