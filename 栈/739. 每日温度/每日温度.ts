function dailyTemperatures(temperatures: number[]): number[] {
    /**
     * 从右到左
     */
    const lenght = temperatures.length;
    let stack: number[] = [];
    let res: number[] = new Array(lenght).fill(0);
    for (let i = lenght - 1; i >= 0; i--) {
        while (stack.length && temperatures[i] >= temperatures[stack[0]]) {
            stack.shift();
        }
        if (stack.length) {
            res[i] = stack[0] - i;
        }
        stack.unshift(i);
    }
    return res;
}

const ans_2 = {
    dailyTemperatures(temperatures: number[]): number[] {
        /**
         * 从左到右
         */
        let lenght = temperatures.length;
        let stack: number[] = [];
        let res: number[] = new Array(lenght).fill(0);
        for (let i = 0; i < lenght; i++) {
            while (stack.length && stack[0] < temperatures[i]) {
                let j: number = stack.shift()!;
                res[j] = i - j;
            }
            stack.unshift(i);
        }
        return res;
    },
};
