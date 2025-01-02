func longestConsecutive(nums []int) int {
	ansNumber, numsSet := 0, make(map[int]bool)
	for _, num := range nums {
		numsSet[num] = true
	}
	for number := range numsSet {
		if numsSet[number-1] { // 如果有比当前数小的数，跳过
			continue
		}
		nextNumber := number + 1
		for numsSet[nextNumber] {
			nextNumber++
		}
		ansNumber = max(ansNumber, nextNumber-number) // 更新最大长度
	}
	return ansNumber
}