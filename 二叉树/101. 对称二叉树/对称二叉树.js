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
var isSymmetric = function (root) {
  const sametree = (left, right) => {
    if (left === null || right === null) {
      return left === right;
    } else {
      return (
        left.val === right.val &&
        sametree(left.left, right.right) &&
        sametree(left.right, right.left)
      );
    }
  };
  return sametree(root.left, root.right);
};
