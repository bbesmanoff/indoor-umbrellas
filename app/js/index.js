import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Feed from './components/fb-feed';
import StatusUpdate from './components/fb-status-update';
import EventList from './components/event-list';
import TickerList from './components/ticker-list';
import Chat from './components/chat';

//Have to manually remove auto-added fb hash
//see here: https://github.com/jaredhanson/passport-facebook/issues/12#issuecomment-5913711
if(window.location.hash && window.location.hash === "#_=_" || window.location.hash === "_=_"){
    window.history.replaceState('', document.title, window.location.pathname);
}

class App extends React.Component {

  render() {
    var today = new Date();
    var tomorrow = new Date((new Date()).setDate(today.getDate() + 1));

    return (
      <div>
        <Navbar page="Home"/>
        <div className="container">
            <div id = "alert-placeholder"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <h1>Stocks</h1>
              <TickerList />
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
        <Chat />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
