function spiralOrder(matrix: number[][]): number[] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    /**
     * 方法一：采用标记法+四个方向遍历
     * 思路：
     * 1. 先确定四个方向的坐标变化量，然后按照方向移动，遇到边界或已访问过的元素则改变方向
     * 2. 记录当前方向的坐标变化量，并在每次移动后更新当前位置坐标
     * 3. 重复以上步骤，直到遍历完所有元素
     *
     * 时间复杂度：O(rows * cols)
     * 空间复杂度：O(1)
     */
    const directions = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0], // up
    ];
    const result: number[] = [];
    let directionIndex = 0; // 0: right, 1: down, 2: left, 3: up
    let totalSteps = cols * rows;
    let [x, y] = [0, 0]; // 当前位置坐标
    while (totalSteps--) {
        result.push(matrix[x][y]);
        matrix[x][y] = Infinity; // 标记为已访问
        const [dx, dy] = directions[directionIndex];
        let nextX = x + dx;
        let nextY = y + dy;
        // 检查边界或已访问过的元素
        if (
            nextX < 0 ||
            nextX >= rows ||
            nextY < 0 ||
            nextY >= cols ||
            matrix[nextX][nextY] === Infinity
        ) {
            directionIndex = (directionIndex + 1) % 4; // 改变方向
        }
        x += directions[directionIndex][0];
        y += directions[directionIndex][1];
    }
    return result;

    /**
     * 方法二：采用四个方向遍历+边界检查
     * 思路：
     * 1.规定四个方向的界限
     * 2.顺时针遍历矩阵，通过四个for循环，分别遍历四个方向的元素，并将其加入结果数组
     * 3.更新界限，直到遍历完所有元素
     *
     * 时间复杂度：O(rows * cols)
     * 空间复杂度：O(1)
     */
    if (rows === 0) {
        return [];
    }
    let res: number[] = [];
    let left: number = 0,
        right: number = cols - 1,
        top: number = 0,
        bottom: number = rows - 1;
    while (1) {
        // 从左到右
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        if (++top > bottom) break;
        // 从上到下
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        if (left > --right) break;
        // 从右到左
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        if (top > --bottom) break;
        // 从下到上
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        if (++left > right) break;
    }
    return res;
}
