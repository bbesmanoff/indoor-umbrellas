import React, { Component } from 'react';

import Event from './event';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {events:[]}
  }

  componentDidMount() {
    var eventRequest = new XMLHttpRequest();
    var eventString, events;
    if (this.props.date) {
      var propDate = new Date(this.props.date);
      var dateString = `${propDate.getMonth()+1}-${propDate.getDate()}-${propDate.getFullYear()}`;
      eventRequest.open('GET', `./api/events/${dateString}`);
    }
    else {
      eventRequest.open('GET', './api/events');
    }
    eventRequest.onload = () => {
        if (eventRequest.status === 200) {
            eventString = eventRequest.responseText;
            events = JSON.parse(eventString);
            this.setState({
              events
            });
        }
        else {
          // request failed
        }
    };

    eventRequest.send();
  }

  render() {
    var events = this.state.events.map((e) => {
      return (<Event key={e.title} title={e.title} date={e.date} description={e.description}
                    startTime={e.startTime} endTime={e.endTime} />);
    });
    return (
      <div>
        {events}
      </div>
    );
  }
}
