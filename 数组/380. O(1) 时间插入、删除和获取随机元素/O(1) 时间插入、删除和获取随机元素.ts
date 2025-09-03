class RandomizedSet {
    private arr: number[];
    private map: Map<number, number>;
    private length: number;
    constructor() {
        /**
         * 使用数组+ma来实现这个功能
         * 数组存储数据，map存储数据对应的下标
         */
        this.arr = [];
        this.map = new Map();
        this.length = 0;
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }
        this.arr.push(val);
        this.map.set(val, this.length);
        this.length++;
        return true;
    }

    remove(val: number): boolean {
        /**
         * 通过交换最后一个数据，然后删除最后一个数据，最后更新map以及length
         */
        if (!this.map.has(val)) {
            return false;
        }
        const index = this.map.get(val)!;
        this.arr[index] = this.arr[this.length - 1];
        this.map.set(this.arr[index], index);
        this.arr.pop();
        this.length--;
        this.map.delete(val);
        return true;
    }

    getRandom(): number {
        const index = Math.floor(Math.random() * this.length);
        return this.arr[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
