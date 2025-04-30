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
var deleteDuplicates = function(head) {
    // 方法一 使用set容器解决
    // const set = new Set()
    // const headnode = new ListNode(0,head)
    // let prenode = headnode
    // let currentnode = head
    // while(currentnode){
    //     if(set.has(currentnode.val)){
    //         prenode.next = currentnode.next
    //         currentnode = currentnode.next
    //     }else{
    //         set.add(currentnode.val)
    //         prenode = currentnode
    //         currentnode = currentnode.next
    //     }
    // }
    // return headnode.next

    // 方法二 使用依次遍历解决
    if(head===null){
        return head
    }
    let currentnode = head
    while(currentnode.next){
        if(currentnode.val===currentnode.next.val){
            currentnode.next = currentnode.next.next
        }else{
            currentnode = currentnode.next
        }
    }
    return head
};