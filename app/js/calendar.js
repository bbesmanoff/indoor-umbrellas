import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import EventList from './components/event-list';

class App extends React.Component {

  render() {
    var today = new Date();
    var tomorrow = (new Date()).setDate(today.getDate() + 1);

    return (
      <div>
        <Navbar page="Calendar"/>
        <div className="container">
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
