import React from 'react';
import Router from 'react-router';

import Navbar from './components/navbar';
import Event from './components/event';
import Ticker from './components/ticker';

const {Route, RouteHandler} = Router;

class App extends React.Component {
  render() {
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
              <h1>Calendar</h1>
              <Event title="R1 Release" day="Monday" startTime="12:00pm">
                <p> We have to release our awesome web-app! </p>
              </Event>
              <Event title="Ice Cream Event" day="Tuesday" startTime="12:00pm" endTime="1:00pm" />
              <Event title="Watch Movies" day="Wednesday" startTime="3:00am" endTime="9:00pm">
                <p> Watching Movies All Day Long! </p>
              </Event>
            </div>
          </div>
        </div>
        <RouteHandler/>
      </div>
    );
  }
}

const routes = (
  <Route name='app' path='/' handler={App}>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('main'));
});
