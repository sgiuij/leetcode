/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
//  笔记： 
// 1。  array不能直接判断相等，必须一个值一个值比
// 2.   forEach 会产生异步。但是可以记一下syntax

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 
var leafSimilar = function(root1, root2) {
    var ans1 = []
    var ans2 = []
    dfs(root1, ans1)
    dfs(root2, ans2)
    console.log(ans1, ans2)
    for (var i=0; i<ans1.length; i++){
      if (ans1[i]!==ans2[i]) return false
    }
    return true
}

var dfs = function(root, ans){
  if (!root) return
  if (!root.left && !root.right) {
    ans.push(root.val)
  } else{
    var left = dfs(root.left, ans)
    var right = dfs(root.right, ans)
  }
}

var root1 = {val:3, left:{
  val:9
}, right:{
  val:20, left:{
    val:15
  }, right:{
    val:7
  }
}}
var root2 = {val:3, left:{
  val:9
}, right:{
  val:20, left:{
    val:15
  }, right:{
    val:7
  }
}}

var root3 = {val:3, left:{
  val:9
}, right:{
  val:20, left:{
    val:15, left:{
      val:4}
  }, right:{
    val:7
  }
}}


console.log(leafSimilar(root1,root3))