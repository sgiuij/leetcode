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

// var min = -1
// var dep = 0
// var minDepth = function(root) {
//     if (!root) return 0
//     depth(root)
//     console.log("aaaa"+min, dep)
//     return min
// };

// var depth = function(root){
//     dep++
//     if (!root) return 0
//     if (!root.left && !root.right) {
//         console.log("bbbb" + min, dep)
//         if (min<0 || depth<min) min = dep
//         dep = 0
//     }else{
//         console.log("cccc" + min, dep)
//         depth(root.left)
//         depth(root.right)
//         console.log("dddd" + min, dep)
//     }
// }

const minDepth = (root) => {
    if (!root) return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    return (left == 0 || right == 0) ? left + right + 1: Math.min(left, right) + 1;
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

console.log(minDepth(root1))