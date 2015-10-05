import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar page="Stocks"/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
