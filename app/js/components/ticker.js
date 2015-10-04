import React, { Component } from 'react';

export default class Ticker extends Component {
  render() {
    console.log(this.props.symbol);
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.symbol}</h3>
        </div>
        <div className="panel-body">
          <p>{this.props.price}</p>
        </div>
      </div>
    );
  }
}
