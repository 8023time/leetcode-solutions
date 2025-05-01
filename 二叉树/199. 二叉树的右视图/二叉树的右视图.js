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
    // // 采用层序遍历来解决这个题目
    // let ans = [];
    // if (root === null) {
    //     return [];
    // }
    // let queue_arr = [root];
    // while (queue_arr.length > 0) {
    //     let length = queue_arr.length;
    //     let temp_queue = [];
    //     for (let i = 0; i < length; i++) {
    //         let temp_node = queue_arr.shift();
    //         if (i === length - 1) {
    //             ans.push(temp_node.val);
    //         }
    //         if (temp_node.left !== null) {
    //             temp_queue.push(temp_node.left);
    //         }
    //         if (temp_node.right !== null) {
    //             temp_queue.push(temp_node.right);
    //         }
    //     }
    //     queue_arr = temp_queue;
    // }
    // return ans;

    let ans = [];
    const get_height_right = (root, height) => {
        if (root === null) {
            return 0;
        }
        if (height === ans.length) {
            ans.push(root.val);
        }
        get_height_right(root.right, height + 1);
        get_height_right(root.left, height + 1);
    };
    get_height_right(root, 0);
    return ans;
};
