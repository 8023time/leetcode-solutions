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
var deleteDuplicates = function (head) {
  // 方法一:采用set容器或者map容器来解决这个问题
  /**
   * 不写,略
   */
  // 方法二:采用快慢指针来解决这个题目
  let sentinel_node = new ListNode(0, head);
  let current_node = sentinel_node;
  while (current_node.next && current_node.next.next) {
    let value = current_node.next.val;
    if (current_node.next.next.val === value) {
      while (current_node.next && current_node.next.val === value) {
        current_node.next = current_node.next.next;
      }
    } else {
      current_node = current_node.next;
    }
  }
  return sentinel_node.next;
};
