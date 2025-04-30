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
var isBalanced = function (root) {
  // 采用递归的方法来解决这个题目
  function get_height(node) {
    if (node === null) {
      return 0;
    }

    let left_length = get_height(node.left);
    if (left_length === -1) {
      return -1;
    }
    let right_length = get_height(node.right);
    if (right_length === -1) {
      return -1;
    }

    if (Math.abs(left_length - right_length) > 1) {
      return -1;
    }

    return Math.max(left_length, right_length) + 1;
  }

  return get_height(root) === -1 ? false : true;
};
