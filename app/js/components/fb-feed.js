import React, { Component } from 'react';

export default class Feed extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          <p className="text-primary">{body}</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
