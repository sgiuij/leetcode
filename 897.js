/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var increasingBST = function(root) {
    var list = []
    dfs(root, list)
    // list.sort((a, b) => a - b)
    var ans = new TreeNode(0)
    var cur = ans
    for (val of list){
        cur.right = new TreeNode(val)
        cur = cur.right
    }
    return ans.right
};

var dfs = function(root, list2){
    if (!root)return
    dfs(root.left, list2)
    list2.push(root.val)
    dfs(root.right, list2)
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

  console.log(increasingBST(root1))