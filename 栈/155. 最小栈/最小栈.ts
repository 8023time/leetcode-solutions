class MinStack {
    private minStack: number[];
    constructor() {
        this.minStack = [];
    }

    push(val: number): void {
        this.minStack.unshift(val);
    }

    pop(): void {
        this.minStack.shift();
    }

    top(): number {
        return this.minStack[0];
    }

    getMin(): number {
        return Math.min(...this.minStack);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
