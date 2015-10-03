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
    eventRequest.open('GET', './api/events');
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
    console.log(this.props.date)
    var events = this.state.events
    .filter((e) => {
      return (new Date(e.date).toDateString() == new Date(this.props.date).toDateString());
    })
    .map((e) => {
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
