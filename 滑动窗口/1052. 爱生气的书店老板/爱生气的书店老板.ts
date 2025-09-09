function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    /**
     * 分开为两个方面
     * 1.不生气的情况下
     * 2.在minutes内生气的情况下，的最大值
     * 两个相加在一起
     */
    let sume: number[] = new Array(2).fill(0);
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            sume[0]! += customers[i]!;
        }
    }
    let value: number = 0;
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 1) {
            value += customers[i]!;
        }
        if (i - minutes + 1 < 0) continue;

        sume[1]! = Math.max(sume[1]!, value);

        if (grumpy[i - minutes + 1] === 1) {
            value -= customers[i - minutes + 1]!;
        }
    }
    return sume[0]! + sume[1]!;
}
