import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Feed from './components/fb-feed';
import StatusUpdate from './components/fb-status-update';
import EventList from './components/event-list';

class App extends React.Component {

  render() {
    var today = new Date();
    var tomorrow = (new Date()).setDate(today.getDate() + 1);

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
              <StatusUpdate title="Status Update" prompt="Enter a Facebook status update below:">
              </StatusUpdate>
              <Feed />
            </div>
            <div className="col-xs-4">
              <h1>{"Today's Events"}</h1>
              <EventList date={today}/>
              <h1>{"Upcoming Events"}</h1>
              <EventList date={tomorrow} />
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
