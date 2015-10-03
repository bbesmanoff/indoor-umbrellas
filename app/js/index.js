import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Event from './components/event';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar page="Home"/>
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <h1>Stocks</h1>
            </div>
            <div className="col-xs-4">
              <h1>Feed</h1>

            </div>
            <div className="col-xs-4">
              <h1>Calendar</h1>
              <Event title="R1 Release" day="Monday" startTime="12:00pm"
                  description="We have to release our awesome web-app!"
              />
              <Event title="Ice Cream Event" day="Tuesday" startTime="12:00pm" endTime="1:00pm" />
              <Event title="Watch Movies" day="Wednesday" startTime="3:00am" endTime="9:00pm"
                description="Watching Movies All Day Long!"
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
