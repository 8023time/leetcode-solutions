/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
    // 使用哈希表加双指针来解决这道题目
    // 使用Set容器来存储接待你的值
    let visted = new Set()
    let prenode = null
    let currentnode = head
    while (currentnode) {
        if (visted.has(currentnode.val)) { // 判断在在之前的位置上是否出现过这个值
            prenode.next = currentnode.next// 删除处理
        } else {
            visted.add(currentnode.val)
            prenode = currentnode
        }
        currentnode = currentnode.next
    }
    return head
};