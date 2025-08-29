/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    /**
    矩阵转置:matrix[i][j] ↔ matrix[j][i]
    矩阵水平镜像:matrix[i][j] ↔ matrix[i][n-1-j]
    矩阵垂直镜像:matrix[i][j] ↔ matrix[m-1-i][j]
    矩阵顺时针旋转90度， new_matrix[j][n-1-i] = matrix[i][j],就相当于垂直镜像+转置
    矩阵顺时针旋转180度，new_matrix[n-1-i][n-1-j] = matrix[i][j],就相当于水平镜像+垂直镜像
    矩阵逆时针旋转90度，new_matrix[n-1-j][i] = matrix[i][j],就相当于水平镜像+转置
     */
    /**
     * 思路：本题的解法就是对矩阵进行转置+水平镜像
     * 1. 先对矩阵进行转置，即交换矩阵的行列
     * 2. 再对矩阵进行水平镜像，即将矩阵的每一行的元素进行反转
     * 3. 最后返回答案即可
     */
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < Math.floor(matrix[i].length / 2); j++) {
            [matrix[i][j], matrix[i][matrix[i].length - 1 - j]] = [
                matrix[i][matrix[i].length - 1 - j],
                matrix[i][j],
            ];
        }
    }
}
