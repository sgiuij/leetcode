
// recursion solution
var climbStairs = function(n) {
    var memo = []
    return recursion(0, n, memo)
}

var recursion = function(cur, n, memo){
    if (cur>n) return 0
    if (cur===n) return 1
    if (memo[cur]>0) return memo[cur]
    memo[cur] = recursion(cur+1, n, memo) + recursion(cur+2, n, memo)
    return memo[cur]
}

console.log(climbStairs(2))

//recursion solution 2

// var climbStairs = function(n) {
//     return recursion(n, 0)
// };

// var recursion = function(n, cur){
//     if (cur>n) return 0
//     if (cur===n) return 1
//     return recursion(n, cur+1) + recursion(n, cur+2)
// }

// console.log(climbStairs(3))


// // to solve stack overflow problem

// var climbStairs = function(n) {
//     var record = []
//     return recursion(n, 0, record)
// };

// var recursion = function(n, cur, record){
//     if (cur>n) return 0
//     if (cur===n) return 1
//     if (record[cur]) return record[0]
//     record[cur] = recursion(n, cur+1, record) + recursion(n, cur+1, record)
//     return record[cur]
// }

// console.log(climbStairs(2))

