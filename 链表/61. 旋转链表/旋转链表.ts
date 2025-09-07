/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 0) return head;

    let size: number = 0;
    let curr: ListNode | null = head;

    // 计算长度
    while (curr) {
        size++;
        curr = curr.next;
    }
    k %= size;
    if (k === 0) return head;

    // 使用快慢指针
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    for (let i = 0; i < k; i++) {
        fast = fast!.next;
    }
    while (fast!.next) {
        fast = fast!.next;
        slow = slow!.next;
    }

    // 断开
    let newHead: ListNode | null = slow!.next;
    slow!.next = null;
    fast!.next = head;

    return newHead;
}
