import React from 'react';
import Router from 'react-router';

import Navbar from './components/navbar';
import EventList from './components/event-list';

const {Route, RouteHandler} = Router;

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

            </div>
            <div className="col-xs-4">
              <h1>{"Today's Events"}</h1>
              <EventList date={today}/>
              <h1>{"Upcoming Events"}</h1>
              <EventList date={tomorrow} />
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
