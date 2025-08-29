/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */
class _Node {
    val: number;
    next: _Node | null;
    random: _Node | null;

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}
function copyRandomList(head: _Node | null): _Node | null {
    /**
     * 思路1：使用map容器，将原链表复制一份，并将原链表和复制后的链表分离开来 --- 时间复杂度O(n)，空间复杂度O(n)
     * 思路2：不使用map容器，直接在原链表上添加新的连表，最后分离开来 --- 时间复杂度O(n)，空间复杂度O(1)
     *            遍历原链表，在每一个节点后面添加一个新的节点，依次往复
     *            遍历链表，将链表的random指针指向对应的新节点
     *            分离开来为两个链表，并返回复制好的链表
     */
    if (!head) return null;

    const map = new Map<_Node, _Node>();

    // 第一次遍历：复制每个节点（只复制 val）
    let curr: _Node | null = head;
    while (curr) {
        map.set(curr, new _Node(curr.val));
        curr = curr.next;
    }

    // 第二次遍历：复制 next 和 random
    curr = head;
    while (curr) {
        const newNode = map.get(curr)!;
        newNode.next = curr.next ? map.get(curr.next)! : null;
        newNode.random = curr.random ? map.get(curr.random)! : null;
        curr = curr.next;
    }

    return map.get(head)!;
}
