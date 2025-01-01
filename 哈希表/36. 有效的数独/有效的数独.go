func isValidSudoku(board [][]byte) bool {
	col, box, row := make([][10]int, 9), make([][10]int, 9), make([][10]int, 9)
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			if board[i][j] == '.' {
				continue
			}
			number := int(board[i][j] - '0')
			if row[i][number] == 1 || col[j][number] == 1 || box[i/3*3+j/3][number] == 1 {
				return false
			}
			row[i][number] = 1
			col[j][number] = 1
			box[i/3*3+j/3][number] = 1
		}
	}
	return true
}