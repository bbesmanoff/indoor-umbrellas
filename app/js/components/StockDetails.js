import React, {Component} from 'react';
import _ from 'lodash';

export default class StockDetails extends Component {
  renderNoStock() {
    return (
      <strong>
        Please search using the search bar (above|to the left).
      </strong>
    );
  }

  renderQuandlError() {
    return (
      <div class="alert alert-danger">
        <strong>
          Something went wrong when reading stock data.  Please check your input and try again.
        </strong>
      </div>
    );
  }

  render() {
    if (this.props.stock == null) {
      return this.renderNoStock();
    };

    if (this.props.stock.quandl_error) {
      return this.renderQuandlError();
    }

    const stock = this.props.stock.dataset;
    const pairs = _.zip(stock.column_names, stock.data[0]).map((e) => {
    return (
      <tr key={e.join('')}>
        <td>{e[0]}</td>
        <td>{e[1]}</td>
      </tr>
    )});

    return (
      <div>
        <h1>{stock.name}</h1>
        <table>
          <tbody>
            {pairs}
          </tbody>
        </table>
      </div>
    );
  }
}
