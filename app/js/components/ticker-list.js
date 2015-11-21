import React, { Component } from 'react';

import Ticker from './ticker'
import {getStockData} from '../util/stock-utils';

export default class TickerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      requestedStocks: 0
    };
  }

  componentDidMount () {
    var stockRequest = new XMLHttpRequest();
    var symbol = this.props.symbol;
    var stockInfo, stocks;
    stockRequest.open('GET', '/api/stocks/top-stocks');
    stockRequest.onload = () => {
      if (stockRequest.status === 200) {
        stockInfo = stockRequest.responseText;
        stocks = JSON.parse(stockInfo);
        stocks.forEach((symbol) => {
          this.setState({...stocks, requestedStocks: this.state.requestedStocks + 1});
          getStockData(symbol).then((stock) => {
            this.setState({
              stocks: [...this.state.stocks, stock]
            });
          });
        });
      }
    }
    stockRequest.send();
  };

  render() {
    var stocks = this.state.stocks.map((e) => {
      const data = e.dataset;

      return <Ticker key={data.name} symbol={data.name} price={data.data[0][1]} />
    });

    return (
      <div>
        <span>
          {this.state.requestedStocks == this.state.stocks.length ?
              "" : "Loading stocks, please wait..."}
        </span>
        {stocks}
      </div>
    );
  }
}
