import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Calendar from './components/calendar';

class App extends React.Component {

  render() {
    var today = new Date();

    return (
      <div>
        <Navbar page="Calendar"/>
        <h1>Calendar</h1>
        <div className="container">
          <Calendar date={today}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
