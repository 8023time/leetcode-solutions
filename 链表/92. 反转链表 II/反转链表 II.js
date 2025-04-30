/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 与上面的有一题很像,设置一个哨兵节点,然后再进行反转
  let dummy = new ListNode(-1);
  dummy.next = head;
  let pre = dummy;
  // for循环遍历到当前left前面的节点
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  // 接着对中间的链表进行反转
  let seconednode = pre.next;
  let fristnode = null;
  let current = pre.next;
  for (let i = 0; i < right - left + 1; i++) {
    let next = current.next;
    current.next = fristnode;
    fristnode = current;
    current = next;
  }
  pre.next = fristnode;
  seconednode.next = current;

  return dummy.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 与上面的有一题很像,设置一个哨兵节点,然后再进行反转
  let dummy = new ListNode(-1);
  dummy.next = head;
  let pre = dummy;
  // for循环遍历到当前left前面的节点
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  // 接着对中间的链表进行反转
  let seconednode = pre.next;
  let fristnode = null;
  let current = pre.next;
  for (let i = 0; i < right - left + 1; i++) {
    let next = current.next;
    current.next = fristnode;
    fristnode = current;
    current = next;
  }
  pre.next = fristnode;
  seconednode.next = current;

  return dummy.next;
};
