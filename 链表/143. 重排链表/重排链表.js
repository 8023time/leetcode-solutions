/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let middle = get_middle_node(head);
  let head2 = reverse_node(middle.next);
  middle.next = null;
  表演;
  merge_node(head, head2);
};
// 获取链表的中点节点
function get_middle_node(head) {
  let slow_node = head;
  let fast_node = head;
  while (fast_node && fast_node.next) {
    slow_node = slow_node.next;
    fast_node = fast_node.next.next;
  }
  return slow_node;
}
// 翻转链表
function reverse_node(head) {
  let pre_node = null;
  let current_node = head;
  while (current_node) {
    let next_node = current_node.next;
    current_node.next = pre_node;
    pre_node = current_node;
    current_node = next_node;
  }
  return pre_node;
}
// 合并链表操作
function merge_node(head1, head2) {
  let current_node_frist = head1;
  let current_node_second = head2;
  while (current_node_second) {
    let next_node_frist = current_node_frist.next;
    let next_node_second = current_node_second.next;

    current_node_frist.next = current_node_second;
    current_node_second.next = next_node_frist;

    current_node_frist = next_node_frist;
    current_node_second = next_node_second;
  }
  return head1;
}
