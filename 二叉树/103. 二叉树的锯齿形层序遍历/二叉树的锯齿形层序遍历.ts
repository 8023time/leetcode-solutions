/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    /**
     * 使用bfs来解决这个问题
     */
    let queue: TreeNode[] = [];
    let result: number[][] = [];
    if (root === null) {
        return result;
    }
    let m = true; // 控制层序遍历的方向
    queue.push(root);
    while (queue.length > 0) {
        let value_temp: number[] = [];
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            let node: TreeNode = queue.shift()!;
            value_temp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (m) {
            result.push(value_temp);
            m = false;
        } else {
            result.push(value_temp.reverse());
            m = true;
        }
    }
    return result;
}
