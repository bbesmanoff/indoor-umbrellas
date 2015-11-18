import React, { Component } from 'react';

export default class Story extends React.Component {
  render() {
    var formattedDate = new Date(parseInt(Date.parse(this.props.created))).toLocaleString();
      
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{formattedDate}</h3>
        </div>
        <div className="panel-body">
          <p className="text-primary">{this.props.story}</p>
          <hr />
          <p className="text-primary">{this.props.message}</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}