import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import StockSearchBar from './components/stock-search-bar';
import StockDetails from './components/stock-details';
import StockPlot from './components/stock-plot';
import Chat from './components/chat';
import StockTransactionPanel from './components/stock-transaction-panel';

import {getStockData} from './util/stock-utils';

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
          <div className="row">
            <StockSearchBar onSearch={this.handleSymbolChange.bind(this)} />
          </div>
          <div className="row">
            <StockTransactionPanel stock={this.state.stock} />
          </div>
          <div className="row">
            <StockDetails stock={this.state.stock}/>
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
