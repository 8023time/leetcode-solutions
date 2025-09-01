function largestRectangleArea(heights: number[]): number {
    /**
     * 可以通过枚举加上单调栈来解决这个问题
     */
    let stack: number[] = [];
    // 处理左边最小值的情况
    const length = heights.length;
    let leftArray: number[] = new Array(length).fill(-1);
    for (let i = 0; i < length; i++) {
        while (stack.length && heights[stack[0]] >= heights[i]) {
            stack.shift();
        }
        if (stack.length) {
            leftArray[i] = stack[0];
        }
        stack.unshift(i);
    }

    // 处理右边最小值的情况
    let rightArray: number[] = new Array(length).fill(length);
    stack = [];
    for (let i = length - 1; i >= 0; i--) {
        while (stack.length && heights[stack[0]] >= heights[i]) {
            stack.shift();
        }
        if (stack.length) {
            rightArray[i] = stack[0];
        }
        stack.unshift(i);
    }

    // 处理最后的结果
    let max_area = 0;
    for (let i = 0; i < length; i++) {
        max_area = Math.max(
            max_area,
            (rightArray[i] - leftArray[i] - 1) * heights[i]
        );
    }

    return max_area;
}
