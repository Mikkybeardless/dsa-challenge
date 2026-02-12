/**
 * Time complexity: O(n) - Single pass through the arry of prices
 * Space complexity: O(1) - Only storing two variables
 */

export function maxProfit(prices: number[]) {
  let maxProfit: number = 0;
  let minPrice: number = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}
