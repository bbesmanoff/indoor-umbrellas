/*
* Reducer function which generates the total value of the stock as well as the
* number of shares of the stock owned.  It can be passed to a reduce function,
* such as Array#reduce to reduce a transaction history to a single
* representative object of the portfolio at the current time.
*/
export function reduceTransactionHistory(acc, transaction) {
  const {symbol, delta, price} = transaction;

  if (!acc[symbol]) {
    acc[symbol] = {value: 0, shares: 0};
  }

  acc[symbol].value -= delta * price;
  acc[symbol].shares += delta;

  return acc;
}
