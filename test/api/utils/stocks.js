import expect from 'expect.js';
import {reduceTransactionHistory} from '../../../api/utils/stocks';

describe('API Stock Utils', () => {
  describe('.reduceTransactionHistory', () => {
    it('should work for a single stock', () => {
      const transactions = [
        createTransaction('AMZN', 5, 500),
        createTransaction('AMZN', -4, 600)
      ]

      const result = transactions.reduce(reduceTransactionHistory, {});

      expect(result).to.eql({'AMZN': {value: -100, shares: 1}});
    });

    it('should work for a multiple stocks', () => {
      const transactions = [
        createTransaction('KRTZ', 1, 100),
        createTransaction('KRTZ', 10, 1000),
        createTransaction('AMZN', 3, 300)
      ]

      const result = transactions.reduce(reduceTransactionHistory, {});

      expect(result).to.eql({'KRTZ': {value: -10100, shares: 11}, 'AMZN': {value: -900, shares: 3}});
    });
  });
});

function createTransaction(symbol, delta, price) {
  return {symbol, delta, price};
}
