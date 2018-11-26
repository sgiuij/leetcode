/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    var left = maxDepth(root.left)
    // console.log(left)
    var right = maxDepth(root.right)
    return Math.max(left, right)+1
};

var root1 = {val:3, left:{
    val:9
  }, right:{
    val:20, left:{
      val:15, left:{
          val:7
      }
    }, right:{
      val:31
    }
  }}

console.log(maxDepth(root1))