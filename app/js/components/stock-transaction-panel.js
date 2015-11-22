import React from 'react';
import {REQUEST_SUCCESSFUL, REQUEST_FAILURE, NO_REQUEST} from '../constants';
import DismissibleAlert from './dismissible-alert';

class StockTransactionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ajaxSuccess: NO_REQUEST}
  }

  performTransaction(action) {
    const transaction = {
      symbol: this.props.stock.dataset.dataset_code,
      delta: this.shareCount.value,
      price: this.props.stock.dataset.data[0][1],
      note: null
    };

    switch (action) {
      case 'SELL':
        transaction.delta *= -1;
        break;
      case 'BUY':
        break;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/stocks/transactions');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = () => {
      this.shareCount.value = '';
      this.setState({...this.state, ajaxSuccess: xhr.status == 200 ?
                                                 REQUEST_SUCCESSFUL :
                                                 REQUEST_FAILURE});
    };

    xhr.send(JSON.stringify({transaction}));
  }

  sellStock() {
    this.performTransaction('SELL');
  }

  buyStock() {
    this.performTransaction('BUY');
  }

  render() {
    // don't do anything if no stock or it's an error
    if (this.props.stock == null || this.props.stock.quandl_error) {
      return <div />;
    }

    return (
      <div>
        <button onClick={this.sellStock.bind(this)}>
          Sell Shares
        </button>
        <input type='number' min='0' ref={(r) => this.shareCount = r} />
        <button onClick={this.buyStock.bind(this)}>
          Buy Shares
        </button>

        {this.renderAlert()}
      </div>
    );
  }
  
  renderAlert() {
    var content;

    const fn = () => this.setState({...this.state, ajaxSuccess: NO_REQUEST});

    switch (this.state.ajaxSuccess) {
      case REQUEST_SUCCESSFUL:
        content = (
          <DismissibleAlert onDismiss={fn} alertType='success'>
            Transaction successful
          </DismissibleAlert>
        );
        break;
      case REQUEST_FAILURE:
        content = (
          <DismissibleAlert onDismiss={fn} alertType='danger'>
            Transaction not successful
          </DismissibleAlert>
        );
        break;
      default:
        content = <div />
        break;
    }

    return content;
  }
}

StockTransactionPanel.propTypes = {
  stock: React.PropTypes.object
}

export default StockTransactionPanel;
