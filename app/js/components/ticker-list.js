import React, { Component } from 'react';

import Ticker from './ticker'

export default class TickerList extends Component {
  constructor(props) {
    super(props);
    this.state = {stocks:[]};
  }

  componentDidMount () {
    var stockRequest = new XMLHttpRequest();
    var serviceURL = "https://www.quandl.com/api/v3/datasets/WIKI/" + this.props.symbol + ".json?api_key=" + process.env.quandl;
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
    var changeColorSet = {
      positive: { color: "#008000" }, // Green
      negative: { color: "#FF0000" }  // Red
    };
    var changeColor = (parseFloat(this.props.change) >= 0) ? changeColorSet.positive : changeColorSet.negative;

    var stocks = this.state.stocks;

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.symbol}</h3>
        </div>
        <div className="panel-body">
          <p>{this.props.askprice} <span style={changeColor}>{this.props.change}</span></p>
        </div>
      </div>
    );
  render() {
    console.log(this.props.date)
    var events = this.state.events
    .map((e) => {
      return (<Ticker key={e.symbol} symbol={e.symbol} price={e.price} high={e.high}
                    low={e.low} yrhigh={e.yrhigh} yrlow={e.yrlow} />);
    });
    return (
      <div>
        {events}
      </div>
    );
  }
}
