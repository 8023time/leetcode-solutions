function findClosest(x: number, y: number, z: number): number {
    /**
     * 两个数字与第三个数字进行减操作，对结果进行比较
     */
    const number1 = Math.abs(x - z);
    const number2 = Math.abs(y - z);
    if (number1 < number2) {
        return 1;
    } else if (number1 > number2) {
        return 2;
    } else {
        return 0;
    }
}
