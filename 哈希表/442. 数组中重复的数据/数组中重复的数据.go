func findDuplicates(nums []int) []int {
	// 首先定义一个哈希表
	repetitivenumber := make(map[int]bool)
	var arr []int
	for _, value := range nums {
		_, ok := repetitivenumber[value]
		if ok {
			arr = append(arr, value)
		} else {
			repetitivenumber[value] = true
		}
	}
	return arr
}