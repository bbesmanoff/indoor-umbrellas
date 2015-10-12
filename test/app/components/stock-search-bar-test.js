require('mocha-jsdom')();
import expect from 'expect.js';
import sinon from 'sinon';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestTools from 'react-addons-test-utils';
import StockSearchBar from '../../../app/js/components/stock-search-bar';

describe('StockSearchBar', () => {
  describe('pressing enter in the text box', () => {
    it('should call the search function', () => {
      const search = sinon.spy();
      const bar = ReactTestTools.renderIntoDocument(<StockSearchBar onSearch={search} />);
      const node = ReactTestTools.findRenderedDOMComponentWithTag(bar, 'input');
      node.value = 'GOOG';

      ReactTestTools.SimulateNative.keyPress(node, {keyCode: 13});

      expect(search.called).to.be(true);
    });
  });
});
