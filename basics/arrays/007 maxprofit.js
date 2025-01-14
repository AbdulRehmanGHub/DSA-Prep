// // find the max profit stocks from [7, 1, 5, 3, 6, 4], but you can choose only once.
const prices = [7, 1, 5, 3, 6, 4];

const maxProfitFunc = (prices) => {
  let minPrice = prices[0]; // we are assuming the first day is cheapest to buy stocks
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    // console.log(currentPrice);

    // update min price if the lower price is found

    minPrice = Math.min(minPrice, currentPrice);
    // console.log(minPrice);

    const potentialProfit = currentPrice - minPrice;
    // console.log(potentialProfit);

    maxProfit = Math.max(maxProfit, potentialProfit);
    // console.log(maxProfit);
  }

  return maxProfit;
};

const profit = maxProfitFunc(prices);
console.log("Maximum profit: ", profit);
