import React, { Component } from 'react';

import Ticker from './ticker'
import {getStockData} from '../util/stock-utils';

export default class TickerList extends Component {
  constructor(props) {
    super(props);
    this.state = {stocks:[]}
  }

  componentDidMount () {
    var stockRequest = new XMLHttpRequest();
    var symbol = this.props.symbol;
    var stockInfo, stocks;
    stockRequest.open('GET', './api/top-stocks');
    stockRequest.onload = () => {
      if (stockRequest.status === 200) {
        stockInfo = stockRequest.responseText;
        stocks = JSON.parse(stockInfo);
        stocks.forEach((symbol) => {
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
      return (<Ticker key={e.symbol} symbol={e.symbol} price={e.price} high={e.high}
                    low={e.low} yrhigh={e.yrhigh} yrlow={e.yrlow} />);
    });
    return (
      <div>
        {stocks}
      </div>
    );
  }
}
