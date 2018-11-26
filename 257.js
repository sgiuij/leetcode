/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */


var chain  = "->"
var binaryTreePaths = function(root) {
    var ans = []
    var path = ""
    if (!root) return 
    path_init = root.val
    dfs(root,path, path_init, ans)
    return ans
};

var dfs = function(root, path, path_init, ans){
    if (!root) return
    if (!root.left && !root.right) {
        path += root.val
        ans.push(path)
        path = path_init
    }else{
        path += root.val+chain
        dfs(root.left, path, path_init, ans)
        dfs(root.right, path, path_init, ans)
    }
}

var root1 = {val:1, left:{
    val:2, right:{
        val:5
    }
  }, right:{
    val:3
  }}

console.log(binaryTreePaths(root1))