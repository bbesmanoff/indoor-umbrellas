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
    var propDate = new Date(this.props.date);
    var dateString = `${propDate.getMonth()+1}-${propDate.getDate()}-${propDate.getFullYear()}`;
    eventRequest.open('GET', `/api/events/`);
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
        var daysEvents = this.state.events.filter( (e) => {
          var eDate = new Date(e.startDateTime);
          return eDate.toDateString() == d.toDateString();
        });
        return (
          <div key={d.getTime()} className="col-xs-1 cal-col">
            <CalendarItem date={d.getTime()} events={daysEvents}/>
          </div>
        );
      });
      return (
        <div key={`${r}-calendar-row`} className="row">
          {dayItems}
        </div>
      );
    });

    return (
      <div className="">
        <div className="row">
          <div className="col-xs-1 cal-col text-primary">Sunday</div>
          <div className="col-xs-1 cal-col text-primary">Monday</div>
          <div className="col-xs-1 cal-col text-primary">Tuesday</div>
          <div className="col-xs-1 cal-col text-primary">Wednesday</div>
          <div className="col-xs-1 cal-col text-primary">Thursday</div>
          <div className="col-xs-1 cal-col text-primary">Friday</div>
          <div className="col-xs-1 cal-col text-primary">Saturday</div>
        </div>
        <div>
          {rowItems}
        </div>
      </div>
    );
  }
}
