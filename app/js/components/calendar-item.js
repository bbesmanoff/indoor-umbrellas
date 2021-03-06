import React, { Component } from 'react';

export default class CalendarItem extends Component {
  render() {
    var today = new Date();
    var propDay = new Date(this.props.date);
    var inMonth = (today.getMonth() == propDay.getMonth());
    var classNameString = `panel panel-default calendar-item
          ${inMonth ? "in-month" : "not-in-month"}
          ${today.toDateString() == propDay.toDateString() ? "cal-today" : ""}`;
    var textClass = `cal-date
          ${today.toDateString() == propDay.toDateString() ? "cal-today" : ""}`;
    var itemEvents = this.props.events.map((e) => {
      return (<p key={e.title} className="text-primary">{e.title}</p>);
    });
    return (
      <div className={classNameString}>
        <div className="panel-body">
          <span className={textClass}>{propDay.getDate()}</span>
          {itemEvents}
        </div>
      </div>
    );
  }
}
