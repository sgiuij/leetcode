/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


 // 笔记： 
 // 1。 在 or statement里面， 先后顺序matter
 // 2. 一方可能null的情况要考虑进去

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSameTree = function(p, q) {
    return dfs(p,q)
}

var dfs= function(p,q){
    if (!p && !q) return true
    if (!p || !q || p.val !== q.val ){
        return false
    }else{
        if(dfs(p.left, q.left) && dfs(p.right, q. right)) return true
        return false
    }
}

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

var root2 = {val:3, left:{
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
console.log(isSameTree(root1, root2))