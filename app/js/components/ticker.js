import React, { Component } from 'react';

export default class Ticker extends Component {
  render() {
    var changeColorSet = {
      positive: {
        color: "#008000" // Green
      },
      negative: {
        color: "#FF0000" // Red
      }
    };

    var changeColor = (parseFloat(this.props.change) >= 0) ? changeColorSet.positive : changeColorSet.negative;

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
  }
}
