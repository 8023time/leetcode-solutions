/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // 解决方法就是把下一个节点的值copy过来,删除下一个节点
    node.val = node.next.val
    node.next = node.next.next
};