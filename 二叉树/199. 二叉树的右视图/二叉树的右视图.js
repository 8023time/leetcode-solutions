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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 采用层序遍历来解决这个题目
  let ans = [];
  if (root === null) {
    return [];
  }
  const queue_arr = [root];
  ans.push(root.val);

  while (queue_arr.length > 0) {
    let length = queue_arr.length;

    for (let i = 0; i < length; i++) {}
  }
};
