import React, { Component } from 'react';

export default class Story extends React.Component {
  render() {
      
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.id}</h3>
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