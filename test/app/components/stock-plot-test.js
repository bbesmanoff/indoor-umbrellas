require('mocha-jsdom')({skipWindowCheck: true});

import StockPlot from '../../../app/js/components/stock-plot';

import sinon from 'sinon';
import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestTools from 'react-addons-test-utils';

describe('StockPlot', () => {
  describe('changing stocks', () => {
    beforeEach(() => {
      // don't actually call through the method
      StockPlot.prototype.__createGraph = StockPlot.prototype.createGraph;
      StockPlot.prototype.createGraph = sinon.spy();

      const stock1 = {name: 'asdf'}, stock2 = {name: 'fdsa'};

      ReactTestTools.renderIntoDocument(<StockPlot stock={stock1} />);
      ReactTestTools.renderIntoDocument(<StockPlot stock={stock2} />);
    });

    afterEach(() => {
      StockPlot.prototype.createGraph = StockPlot.prototype.__createGraph;
      delete StockPlot.prototype.__createGraph;
    });

    it('should re-render the chart', () => {
      expect(StockPlot.prototype.createGraph.callCount).to.be(2);
    });
  });
});
