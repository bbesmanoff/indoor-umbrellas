import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import StockSearchBar from './components/stock-search-bar';
import StockDetails from './components/stock-details';
import StockPlot from './components/stock-plot';
import Chat from './components/chat';

import getStockData from './util/stock-utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stock: null};
  }

  handleSymbolChange() {
    const symbol = document.getElementById('stock-search-input').value;
    if (symbol === '') {
      this.setState({...this.state, stock: null});
    } else {
      getStockData(symbol).then((stock) => {
        this.setState({...this.state, stock});
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar page="Stocks"/>
        <div className="container">
          <StockSearchBar onSearch={this.handleSymbolChange.bind(this)} />
          <StockDetails stock={this.state.stock}/>
        </div>
        <Chat />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));
