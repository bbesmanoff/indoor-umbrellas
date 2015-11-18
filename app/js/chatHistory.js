import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Chat from './components/chat';
import ChatHistory from './components/chat-history';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar page="Chat History"/>
        <div className="container">
          <h1>Chat History</h1>
          <ChatHistory />
        </div>
        <Chat />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
