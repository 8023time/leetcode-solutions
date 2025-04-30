/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // 采用数学的方法来做这个题目
    let slow_node = head
    let fast_node = head
    while(fast_node && fast_node.next) {
        slow_node = slow_node.next
        fast_node = fast_node.next.next
        if(slow_node === fast_node) {
            while(head !== slow_node) {
                head = head.next
                slow_node = slow_node.next
            }
            return slow_node
        } 
    }
    return null
};