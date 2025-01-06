func findRepeatedDnaSequences(s string) []string {
	arr := []string{}
	reprtitivestring := make(map[string]int)
	for i := 0; i+10 <= len(s); i++ {
		temp := s[i : i+10]
		reprtitivestring[temp]++
		if reprtitivestring[temp] == 2 {
			arr = append(arr, temp)
		}
	}
	return arr
}