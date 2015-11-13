import React, { Component } from 'react';

export default class Ticker extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.symbol}</h3>
        </div>
        <div className="panel-body">
          <p>Current Price: ${parseFloat(this.props.price).toFixed(2)}</p>
        </div>
      </div>
    );
  }
}
