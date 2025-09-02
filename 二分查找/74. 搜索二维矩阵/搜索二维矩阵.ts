function searchMatrix(matrix: number[][], target: number): boolean {
    /**
     * 将二维数组转化为一维数组，再使用二分查找算法查找
     * 比如就是说：a[i] = matrix[i/m][i%m] 来表示为一维数组解决问题
     */
    const length = matrix.length * matrix[0].length;
    let left = 0;
    let right = length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value =
            matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];
        if (value === target) {
            return true;
        } else if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

/**
 * 使用排除法来解决这个问题
 * 从左上角开始解决这个问题
 */
const ans_2 = {
    searchMatrix(matrix: number[][], target: number): boolean {
        let row = 0; // 行
        let col = matrix[0].length - 1; // 列
        while (row < matrix.length && col >= 0) {
            if (matrix[row][col] === target) {
                return true;
            } else if (matrix[row][col] > target) {
                col--;
            } else {
                row++;
            }
        }
        return false;
    },
};
