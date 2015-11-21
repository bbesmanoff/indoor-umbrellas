import React, { Component } from 'react';

export default class CreateEvent extends Component {
  componentDidMount() {
    $.datetimepicker.setLocale('en');
    $('#inputStartTime').datetimepicker();
    $('#inputEndTime').datetimepicker();
  }

  render() {
    return (
      <form action="/api/events" method="post" className="form-horizontal">
        <fieldset>
          <legend>New Event</legend>
          <div className="form-group">
            <label htmlFor="inputTitle" className="col-lg-2 control-label">Title</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputTitle" name="title" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription" className="col-lg-2 control-label">Desc.</label>
            <div className="col-lg-10">
              <textarea className="form-control" rows="3" id="inputDescription" name="description"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputLocation" className="col-lg-2 control-label">Loc.</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputLocation" name="location" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputStartTime" className="col-lg-2 control-label">Start</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputStartTime" name="startDateTime" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEndTime" className="col-lg-2 control-label">End</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEndTime" name="endDateTime" />
            </div>
          </div>
        </fieldset>
        <div className="col-lg-10 col-lg-offset-2">
          <button type="reset" className="btn btn-default">Cancel</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}
