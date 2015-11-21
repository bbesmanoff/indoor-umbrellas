import React, { Component } from 'react';

export default class Event extends Component {
  render() {
    var startTime = new Date(this.props.startDateTime);
    var endTime = new Date(this.props.endDateTime);
    var dateString = `${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}`
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          <p className="text-primary">{dateString}</p>
          {this.props.description}
        </div>
      </div>
    );
  }
}
