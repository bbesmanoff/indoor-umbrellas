import expect from 'expect.js';
import {invariant, reduceTransactionHistory} from '../../../api/utils/stocks';

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

  describe('.invariant', () => {
    context('valid states', () => {
      it('should allow zero held shares', () => {
        const result = invariant([createTransaction('KRTZ', 0, 0)]);

        expect(result).to.be(true);
      });

      it('should allow greater than 0 held shares', () => {
        const result = invariant([createTransaction('KRTZ', 5, 0)]);

        expect(result).to.be(true);
      });

      it('should allow multiple symbols in valid states', () => {
        const result = invariant([createTransaction('KRTZ', 5, 0),
          createTransaction('AMZN', 0)]);

        expect(result).to.be(true);
      });
    });

    context('invalid states', () => {
      it('should not allow negative shares', () => {
        const result = invariant([createTransaction('KRTZ', -2, 0)]);

        expect(result).to.be(false);
      });

      it('should fail if any shares are negative', () => {
        const result = invariant([createTransaction('AMZN', 50, 0),
          createTransaction('KRTZ', -2, 0)]);

        expect(result).to.be(false);
      });
    });
  });
});

function createTransaction(symbol, delta, price) {
  return {symbol, delta, price};
}
