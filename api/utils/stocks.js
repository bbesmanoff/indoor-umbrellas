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

/*
* The invariant function *should* be called before committing a transaction to
* history.  It ensures that the following conditions are met of a given
* transaction history:
*
* 1. There are no stocks with negative shares held
*
* If the above conditions are ever violated, a `false` value is returned.  In
* all other cases, a `true` value is returned.
*/
export function invariant(transactions) {
  // get the current state
  const state = transactions.reduce(reduceTransactionHistory, {})

  // a simple reducer to ensure each share is at least zero
  const reducer = (acc, symbol) => acc && (state[symbol].shares >= 0);

  // ensure each symbol is valid
  return Object.keys(state).reduce(reducer, true);
}
