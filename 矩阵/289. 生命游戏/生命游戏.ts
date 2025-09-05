/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    /**
     * 八个方向进行模拟操作即可
     */
    const DIRS = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    // 先复制一个矩阵
    let nextBoard = JSON.parse(JSON.stringify(board));
    // 遍历矩阵
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            // 统计当前细胞周围的活细胞数
            let count: number = 0;
            for (const dir of DIRS) {
                const x = i + dir[0];
                const y = j + dir[1];
                if (
                    x >= 0 &&
                    x < nextBoard.length &&
                    y >= 0 &&
                    y < nextBoard[0].length &&
                    nextBoard[x][y] === 1
                ) {
                    count++;
                }
            }
            // 周围少于2个||大于3个活细胞，该细胞死亡
            if (nextBoard[i][j] === 1 && (count < 2 || count > 3)) {
                board[i][j] = 0;
            }
            // 死细胞周围有3个活细胞，变为活细胞
            if (nextBoard[i][j] === 0 && count === 3) {
                board[i][j] = 1;
            }
        }
    }
}
