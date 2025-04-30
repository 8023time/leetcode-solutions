/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 可以采用快慢指针来做
  // 也可以采用set容器来判断是否有唯一的值
  // 也可以通过map容器来写这个题目
  let slow_node = head;
  let fast_node = head;
  while (fast_node && fast_node.next) {
    slow_node = slow_node.next;
    fast_node = fast_node.next.next;
    if (slow_node === fast_node) {
      return true;
    }
  }
  return false;
};
