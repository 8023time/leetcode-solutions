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

function levelOrder(root: TreeNode | null): number[][] {
    /**
     * 使用bfs来解决这个问题
     */
    let queue: TreeNode[] = [];
    let result: number[][] = [];
    if (root === null) {
        return result;
    }
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
        result.push(value_temp);
    }
    return result;
}
