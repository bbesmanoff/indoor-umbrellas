import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Calendar from './components/calendar';
import Chat from './components/chat';
import CreateEvent from './components/create-event';

class App extends React.Component {

  render() {
    var today = new Date();

    return (
      <div>
        <Navbar page="Calendar"/>
        <div className="container">
          <h1>Calendar</h1>
          <div className="row">
            <div className="col-md-8">
              <Calendar date={today}/>
            </div>
            <div className="col-md-4">
              <CreateEvent />
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
