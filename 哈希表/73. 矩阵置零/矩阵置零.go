func setZeroes(matrix [][]int)  {
    weight := make([]bool, len(matrix))
	height := make([]bool, len(matrix[0]))
	for index,value := range matrix {
		for indexnumber,valuenumber := range value {
			if valuenumber == 0 {
				weight[index] = true
				heigth[indexnumber] = true
			}
		}
	}
	for index,value := range matrix {
		for indexnumber,valuenumber := range value {
			if weight[index] || height[indexnumber] {
				matrix[index][indexnumber] = 0
			}
		}
	}
	return matrix
}