function maxSlidingWindow(nums: number[], k: number): number[] {
    let result: number[] = [];
    let dequeue: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        // 右边
        while (dequeue.length && nums[dequeue[dequeue.length - 1]] <= nums[i])
            dequeue.pop();
        dequeue.push(i);

        // 左边
        let left = i - k + 1;
        if (dequeue[0] < left) dequeue.shift();

        // 取值
        if (left >= 0) result.push(nums[dequeue[0]]);
    }

    return result;
}
