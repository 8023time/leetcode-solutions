function maxArea(height: number[]): number {
    let length: number = height.length;
    let right: number = length - 1;
    let left: number = 0;
    let maxAreaValue: number = 0;

    // 使用双指针来解决这个问题
    while (right > left) {
        // 计算当前的面积
        const area: number =
            (right - left) * Math.min(height[left], height[right]);
        // 更新最大面积
        maxAreaValue = Math.max(maxAreaValue, area);

        // 移动指针
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxAreaValue;
}
