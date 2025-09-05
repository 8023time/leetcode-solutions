function isHappy(n: number): boolean {
    /**
     * 哈希 + 循环
     * 没有什么方法，就是直接做就ok了
     */
    const set: Set<number> = new Set();
    let number = n;
    while (true) {
        let value: number[] = [];

        while (number > 0) {
            value.push(number % 10);
            number = Math.floor(number / 10);
        }
        number = value.reduce((prev, curr) => prev + curr * curr, 0);
        if (set.has(number)) return false;
        set.add(number);
        if (number === 1) return true;
    }
}
