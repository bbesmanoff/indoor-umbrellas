import React, { Component } from 'react';

import Ticker from './ticker'

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
        this.setState({
          stocks
        });
      }
    }
    stockRequest.send();
  };

  render() {
    var stocks = this.state.stocks
    .map((e) => {
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
