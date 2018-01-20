let prices = [1, 2, 8, 9, 4, 4, 6, 3];

const getBestTrades = (prices, ntrades) => {
    let trades = [];
    for (var i = 0; i <= prices.length - 2; i++) {
        for (var j = i + 1; j <= prices.length - 1; j++) {
            trades.push({ net: (-prices[i] + prices[j]), db: i, ds: j });
        }
    }

    var sequentialTrades = {};
    var bestTradeSet;
    for (var i = 0; i < trades.length - 1; i++) {
        for (var j = i + 1; j < trades.length; j++) {
            if (trades[i].db !== trades[j].db && trades[i].ds < trades[j].db && trades[i].ds !== trades[j].ds) {
                var tradeId = `${i}${j}`;
                sequentialTrades[tradeId] = {
                    'firstBuySell': trades[i],
                    'secondBuySell': trades[j],
                    income: trades[i].net + trades[j].net
                };
                bestTradeSet = sequentialTrades[tradeId];
            }
        }
    }

    for (let i in sequentialTrades) {
        if (sequentialTrades[i].income > bestTradeSet.income) {
            bestTradeSet = sequentialTrades[i];
        }
    }
    console.log(bestTradeSet);
    return bestTradeSet;
};

getBestTrades(prices, 5);