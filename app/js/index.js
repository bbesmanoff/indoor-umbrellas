import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Event from './components/event';
import Ticker from './components/ticker';

const {Route, RouteHandler} = Router;
import EventList from './components/event-list';
import TickerList from './components/ticker-list';

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
              <TickerList />
            </div>
            <div className="col-xs-4">
              <h1>Feed</h1>

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
