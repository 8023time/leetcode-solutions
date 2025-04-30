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
var middleNode = function (head) {
  //   let frist_node = head;
  //   let map_node = new Map();
  //   let count = 0;
  //   while (frist_node) {
  //     map_node.set(count, frist_node);
  //     count++;
  //     frist_node = frist_node.next;
  //   }
  //   return map_node.get(Math.ceil((count - 1) / 2));

  // 采用快慢指针来做题目
  let slow_node = head;
  let fast_node = head;
  while (fast_node && fast_node.next) {
    slow_node = slow_node.next;
    fast_node = fast_node.next.next;
  }
  return slow_node;
};
