var calculateChange = function (total, cash) {
  var remainder = cash - total;
  var change = {};
  var denominations = {
    twentyDollar: 2000, tenDollar: 1000, fiveDollar: 500, twoDollar: 200, oneDollar: 100, quarter: 25, dime: 10, nickel: 5, penny: 1
  };

  for (var amount in denominations) {
    var denominationValue = denominations[amount];
    if (remainder >= denominationValue) {
      change[amount] = Math.floor(remainder / denominationValue);
      remainder %= denominationValue;
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
