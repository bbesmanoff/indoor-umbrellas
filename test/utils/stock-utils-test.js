import expect from 'expect.js';
import sinon from 'sinon';

import {getStockData} from '../../app/js/util/stock-utils';

describe('stockUtils', () => {
  describe('.getStockData()', () => {
    const symbol = 'GOOG';
    const endpoint = `/api/stocks/${symbol}`;
    let requests;

    // replace XHR with a sinon object
    before(() => {
      global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
      global.XMLHttpRequest.onCreate = (x) => requests.push(x);
    });

    // restore the real XHR object after all these tests
    after(() => {
      global.XMLHttpRequest.restore();
    });

    // clear the stored requests between each test
    beforeEach(() => requests = []);

    it('should make an appropriate API call', (done) => {
      getStockData(symbol).then(() => {
        expect(requests[0].url).to.be(endpoint);
        done();
      });

      requests[0].respond(200, {}, '{}');
    });
  });
});
