/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const rows = matrix.length;
    const cols = matrix[0].length;

    /**
     * 解法一：暴力解决
     * 遍历矩阵，如果遇到0，将该行和该列的元素全部置为0
     * 先用set容器记录一下需要置为0的行和列，然后再遍历矩阵，将对应元素置为0
     *
     * 时间复杂度：O(mn)
     * 空间复杂度：O(m+n)
     */
    const zeroRows = new Set<number>();
    const zeroCols = new Set<number>();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                // 记住该行，记住该列
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }
    // 根据记住的行和列，将对应元素置为0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }

    /**
     * 解法二：利用标志位
     * 先记录第一行，第一列是否有0，用两个变量记录一下，最后再操作
     * 遍历矩阵，如果遇到0，将该行以及该列的第一个元素置为0
     * 接着遍历数组，如果该行或者列的第一个元素为0，将这个元素值设为0
     * 最后，将第一行，第一列的元素根据记录的变量进行设置是否需要一行或者一列设置为0
     *
     * 时间复杂度：O(mn)
     * 空间复杂度：O(1)
     */
    let firstRowHasZero = false;
    let firstColHasZero = false;
    // 记录第一行是否有0
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }
    // 记录第一列是否有0
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }
    // 遍历矩阵，如果遇到0，将该行以及该列的第一个元素置为0
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // 遍历数组，如果该行或者列的第一个元素为0，将这个元素值设为0
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // 根据记录的变量进行设置是否需要一行或者一列设置为0
    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }
    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}
