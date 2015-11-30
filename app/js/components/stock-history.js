import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class StockHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {stockHistoryItems: []}
  }

  componentDidMount() {
    var stockRequest = new XMLHttpRequest();
    stockRequest.open('GET', `/api/stocks/transactions`);
    stockRequest.onload = () => {
        if (stockRequest.status === 200) {
            var stockString = stockRequest.responseText;
            var stockHistoryItems = JSON.parse(stockString);
            this.setState({
              stockHistoryItems
            });

            //prepare text file
            if (this.textFile !== null) {
              window.URL.revokeObjectURL(this.textFile);
            }
            this.textFile = window.URL.createObjectURL(new Blob([stockString], {type: 'text/plain'}));
            document.getElementById('download-stock-hist').href = this.textFile;
        }
        else {
          // request failed
        }
    };

    stockRequest.send();
  }

  deleteHistory() {
    const request = new XMLHttpRequest();
    request.open('DELETE', '/api/stocks/transactions');

    request.onload = () => {
      if (request.status === 200) {
        this.setState({...this.state, stockHistoryItems: []});
      }
    };

    request.send();
  }

  render() {
      function dateFormatter(cell, row){
        var formattedDate = new Date(cell).toLocaleString();
        return formattedDate;
      }

    function deltaFormatter(cell) {
      const transactionType = (parseInt(cell) < 0) ? 'Sold' : 'Bought';
      return `${transactionType} ${Math.abs(cell)} shares`;
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className="stock-history-table">
            <a id="download-stock-hist" download="stock-log.txt">Download Stocks</a>
            <BootstrapTable data={this.state.stockHistoryItems} striped={true} hover={true} search={true}>
              <TableHeaderColumn dataField="createdAt" isKey={true} dataFormat={dateFormatter}>Date</TableHeaderColumn>
              <TableHeaderColumn dataField="symbol">Symbol</TableHeaderColumn>
              <TableHeaderColumn dataField="price">Price</TableHeaderColumn>
              <TableHeaderColumn dataField="delta" dataFormat={deltaFormatter}>Transaction</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn-danger' onClick={this.deleteHistory.bind(this)}>
            <span className='glyphicon glyphicon-trash'>Delete data</span>
          </button>
        </div>
      </div>
    );
  }
}
