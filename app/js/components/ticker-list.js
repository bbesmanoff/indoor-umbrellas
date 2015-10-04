import React, { Component } from 'react';

import Ticker from './ticker'

export default class TickerList extends Component {
  constructor(props) {
    super(props);
    this.state = {stocks:[]};
  }

  componentDidMount () {
    var stockRequest = new XMLHttpRequest();
    var serviceURL = "https://www.quandl.com/api/v3/datasets/WIKI/" + this.props.symbol + ".json?api_key=j38ozgkznMzRCsKMzzZ4";
    stockRequest.open("GET", serviceURL);
    var stockInfo, stocks;
    stockRequest.onreadystatechange = function() {
      if (stockRequest.readyState === XMLHttpRequest.DONE) {
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
