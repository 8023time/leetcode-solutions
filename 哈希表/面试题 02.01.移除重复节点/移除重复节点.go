/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func removeDuplicateNodes(head *ListNode) *ListNode {
	// 使用map来辅助解决问题
	// 同样的方法
	visted := make(map[int]bool)
	slownode, fastnode := head, head
	for fastnode != nil {
		_, ok := visted[fastnode.Val]
		if ok {
			slownode.Next = fastnode.Next
		} else {
			visted[fastnode.Val] = true
			slownode = fastnode
		}
		fastnode = fastnode.Next
	}
	return head
}