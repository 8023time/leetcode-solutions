function searchMatrix(matrix: number[][], target: number): boolean {
    /**
     * 思路：首先比较矩阵的第一行的最后一个元素和目标值，如果目标值大于等于该元素，则跳出该行搜索，否则保留该行，重复进行
     * 接着就是比较右上角元素和目标值，如果目标值小于该元素，则跳出该列搜索，否则保留该列，重复进行
     * 如果目标值等于该元素，则返回true，否则返回false
     */
    let row = 0;
    let col = matrix[0].length - 1;
    while (row <= matrix.length - 1 && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
}
