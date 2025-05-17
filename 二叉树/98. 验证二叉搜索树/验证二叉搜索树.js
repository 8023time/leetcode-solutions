/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, left = -Infinity, right = Infinity) {
    // 采用递归的写法来解决这个题目
    if (root === null) {
        return true;
    }
    return (
        root.val > left &&
        root.val < right &&
        isValidBST(root.left, left, root.val) &&
        isValidBST(root.right, root.val, right)
    );
};
