/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {number[]} nums
* @return {TreeNode}
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
     
var sortedArrayToBST = function(nums) {
    var low = 0
    var high = nums.length-1
    var head = dfs(nums, low, high)
    return head
}

var dfs = function(nums, low, high){
    if (low > high){
        return null
    }
    var mid = Math.floor((low+high)/2)
    var cur = new TreeNode(nums[mid])
    cur.left = dfs(nums, low, mid-1)
    cur.right = dfs(nums, mid+1, high)
    return cur
}

var nums = [1,2,3,4,5,6,7,8,9,10,11]
console.log(sortedArrayToBST(nums))