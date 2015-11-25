import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import Chat from './components/chat';
import StockHistory from './components/stock-history';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar page="StockHistory"/>
        <div className="container">
          <h1>Stock History</h1>
          <StockHistory />
        </div>
        <Chat />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
