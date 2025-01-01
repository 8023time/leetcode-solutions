/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let row = new Array(9).fill(0).map(() => new Array(10).fill(0))
    let List = new Array(9).fill(0).map(() => new Array(10).fill(0))
    let box = new Array(9).fill(0).map(() => new Array(10).fill(0))
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') continue
            let number = parseInt(board[i][j])
            if (row[i][number] || List[j][number] || box[Math.floor(i / 3) * 3 + Math.floor(j / 3)][number]) return false
            row[i][number] = List[j][number] = box[Math.floor(i / 3) * 3 + Math.floor(j / 3)][number] = 1
        }
    }
    return true
};