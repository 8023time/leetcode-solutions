function intToRoman(num: number): string {
    /**
     * 思路：
     * 暴力解法：枚举所有可能的情况，然后判断是否符合要求。
     */
    const M = ["", "M", "MM", "MMM"]; // 1000 --- 3000
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]; // 100 --- 3000
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]; // 10 --- 300
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; // 1 --- 30
    return (
        M[Math.floor(num / 1000)] +
        C[Math.floor((num % 1000) / 100)] +
        X[Math.floor((num % 100) / 10)] +
        I[num % 10]
    );
}

/**
 * 使用贪心来解决这个题目
 */
const ans_2 = {
    intToRoman(num: number): string {
        const map: [number, string][] = [
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"],
        ];
        let res: string = "";
        for (const [key, value] of map) {
            const number: number = Math.floor(num / key);
            if (number > 0) {
                res += value.repeat(number);
                num -= number * key;
            }
        }
        return res;
    },
};
