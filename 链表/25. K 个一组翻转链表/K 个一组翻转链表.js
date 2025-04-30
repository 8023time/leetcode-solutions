/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 思路: 先求的链表的总长度,用于后续进行判断是否会超出链表长度
  if (k === 1) {
    return head;
  }
  let len = 0;
  let current = head;
  while (current) {
    len++;
    current = current.next;
  }
  // 设置一个哨兵节点
  let dummy = new ListNode(-1);
  dummy.next = head;
  let pre_node = dummy;
  let pre = null;
  let current_node = pre_node.next;
  // 进行判断是否在允许的范围内
  while (len >= k) {
    len -= k;
    // 进行每k个k个的翻转
    for (let i = 0; i < k; i++) {
      let next_node = current_node.next;
      current_node.next = pre;
      pre = current_node;
      current_node = next_node;
    }
    let next_node_node = pre_node.next;
    pre_node.next.next = current_node;
    pre_node.next = pre;
    pre_node = next_node_node;
  }
  return dummy.next;
};
