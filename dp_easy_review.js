// #121 - best time to buy and sell stock

var maxProfit = function(prices) {
    if (!prices || curMin.length<2) return 0
   var curMin = prices[0] 
    var profit = 0
   for (var i=0; i<prices.length; i++){
       if (prices[i]<curMin) curMin = prices[i]
        if ((prices[i]-curMin)>profit) profit = prices[i]-curMin
   }
   return profit
};



// #746 Min cost climbing stairs

var minCostClimbingStairs = function(cost) {
    var memo = []
    return dp(cost, memo, cost.length)
};
var dp = function(cost, memo, cur){
    if (cur<= 1) return 0
    if (memo[cur]) return memo[cur]
    memo[cur] = Math.min(
        dp(cost, memo, cur-1)+cost[cur-1],
        dp(cost, memo, cur-2)+cost[cur-2]
    )
    return memo[cur]
}

