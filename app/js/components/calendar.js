import React, { Component } from 'react';
import CalendarItem from './calendar-item';

export default class Calendar extends Component {
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
    // figure out what the first day of a page is
    var firstDayOfMonth = (new Date(this.props.date)).setDate(1);
    var first = new Date(firstDayOfMonth);
    var firstDayOfPage = first.setDate(first.getDate() - first.getDay());

    // build 2D array of days
    var rows = 6; var columns = 7;
    var days = [];
    var r, c;
    for (r=0; r<rows; r++) {
      days.push([]);
      for (c=0; c<columns; c++) {
        var tDay = new Date(firstDayOfPage);
        tDay.setDate(tDay.getDate() + ((r*7)+c));
        days[r].push(tDay);
      }
    }

    var rowItems = days.map((r) => {
      var dayItems = r.map((d)=> {
        return (
          <td key={d.getTime()}>
            <CalendarItem date={d.getTime()}/>
          </td>
        );
      });
      return (
        <tr key={`${r}-calendar-row`}>
          {dayItems}
        </tr>
      );
    });

    return (
      <table className="calendar-table">
        <tbody>
          {rowItems}
        </tbody>
      </table>
    );
  }
}
