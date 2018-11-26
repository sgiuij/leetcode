/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isBalanced = function(root) {
    return dfs(root) !== -1
};
var dfs = function(root){
    if (!root) return 0
    var left = dfs(root.left)
    if (root.left === -1) return -1
    var right = dfs(root.right)
    if (root.right === -1) return -1
    if (Math.abs(left-right)>1) return -1
    return Math.max(left, right)+1
}


var root1 = {val:3, left:{
    val:9
  }, right:{
    val:20, left:{
      val:15, left:{
          val:7
      }
    }, right:{
      val:3
    }
  }}

  var root2 = {val:3, 
    right:{
    val:20, left:{
      val:15, left:{
          val:7
      }
    }, right:{
      val:31
    }
  }}

  var root3 = {val:1}
//[1,2,2,3,null,null,3,4,null,null,4]
console.log(isBalanced(root1))