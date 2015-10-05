import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import StockSearchBar from './components/StockSearchBar';
import StockDetails from './components/StockDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {symbol: ''};
  }

  handleSymbolChange(symbol) {
    this.setState({...this.getState(), symbol});
  }

  render() {
    return (
      <div>
        <Navbar page="Stocks"/>
        <StockSearchBar onSubmit={this.handleSymbolChange.bind(this)} />
        <StockDetails stock={this.state.stock}/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
