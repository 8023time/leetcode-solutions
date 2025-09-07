function summaryRanges(nums: number[]): string[] {
    let length: number = nums.length;
    let ans: string[] = [];
    let index: number = 0;
    while (index < length) {
        let start: number = nums[index]!;
        let end: number = start;
        while (index + 1 < length && nums[index + 1] === end + 1) {
            index++;
            end = nums[index]!;
        }

        if (start === end) {
            ans.push(`${start}`);
        } else {
            ans.push(`${start}->${end}`);
        }

        index++;
    }
    return ans;
}
