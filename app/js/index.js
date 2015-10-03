import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Event from './components/event';
import Ticker from './components/ticker';

const {Route, RouteHandler} = Router;
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
              <Ticker symbol="AAPL" askprice="100.00" change="+1.00" />
              <Ticker symbol="GOOG" askprice="500.00" change="+2.50" />
              <Ticker symbol="DJI" askprice="23.45" change="-0.47" />
              <Ticker symbol="XOM" askprice="42.42" change="-0.38" />
              <Ticker symbol="XRX" askprice="29.97" change="+0.35" />
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
