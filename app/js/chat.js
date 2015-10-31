import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import MessageList from './components/chat';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar page="Chat"/>
        <div className="container">
          <h1>Chat App</h1>
          <div className="container" id="messages"></div>
          <MessageList />
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));