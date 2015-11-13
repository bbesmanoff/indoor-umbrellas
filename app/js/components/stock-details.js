import React, {Component} from 'react';
import _ from 'lodash';

import StockPlot from './stock-plot';

export default class StockDetails extends Component {
  renderNoStock() {
    return (
      <strong>
        Please search using the search bar above.
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
      <div key={e.join('')}>
        {e[0]}: {e[1]}
      </div>
    )});

    return (
      <div className="row">
        <h2>{stock.name}</h2>
        <div className="col-sm-2">
            {pairs}
        </div>
        <div className="col-sm-10">
          <StockPlot number='20' dataset={this.props.stock.dataset} column='Open' height='400' width='800' />
        </div>
      </div>
    );
  }
}
