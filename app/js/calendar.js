import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Calendar from './components/calendar';
import Chat from './components/chat';

class App extends React.Component {

  render() {
    var today = new Date();

    return (
      <div>
        <Navbar page="Calendar"/>
        <div className="container">
          <h1>Calendar</h1>
          <div className="container">
            <Calendar date={today}/>
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
