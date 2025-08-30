/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }你
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

function sortList(head: ListNode | null): ListNode | null {
    /**
     * 使用归并排序来解决这个问题
     * 1. 递归地将链表分成两半，直到每个子链表只包含一个节点
     * 2. 合并两个有序的子链表，得到一个新的有序链表
     * 3. 重复步骤2，直到整个链表被合并为一个有序链表
     */
    const sortList = (head: ListNode | null): ListNode | null => {
        /**
         * 递归地将链表分成两半，直到每个子链表只包含一个节点---使用快慢指针
         * 1. 快指针每次移动两步，慢指针每次移动一步
         * 2. 当快指针到达链表尾部时，慢指针指向的节点就是链表的中间节点
         * 3. 递归地对左右两个子链表进行排序
         */

        if (head === null || head.next === null) {
            return head;
        }

        let fastnode: ListNode | null = head;
        let slownode: ListNode | null = head;
        let currnode: ListNode | null = null;

        while (fastnode && fastnode.next) {
            // 快慢指针实现寻找到中间节点
            currnode = slownode;
            slownode = slownode.next!;
            fastnode = fastnode.next?.next;
        }

        // 断开链表
        currnode!.next = null;

        let leftNode: ListNode | null = sortList(head);
        let rightNode: ListNode | null = sortList(slownode);

        return mergeList(leftNode, rightNode);
    };

    const mergeList = (
        l1: ListNode | null,
        l2: ListNode | null
    ): ListNode | null => {
        /**
         * 合并两个有序的子链表，得到一个新的有序链表
         */
        const dummy: ListNode = new ListNode(0);
        let current: ListNode = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 ?? l2;

        return dummy.next;
    };

    return sortList(head);
}
