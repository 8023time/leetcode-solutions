func subarraySum(nums []int, k int) int {
	arrnums, numsnumber := 0, 0
	addnumber := make(map[int]int)
	addnumber[arrnums] = 1
	for i := 0; i < len(nums); i++ {
		arrnums += nums[i]
		number := arrnums - k
		if count, exists := addnumber[number]; exists {
			numsnumber += count
		}
		addnumber[arrnums]++
	}
	return numsnumber
}