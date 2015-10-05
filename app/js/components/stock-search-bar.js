import React, {Component} from 'react';

export default class StockSearchBar extends Component {
  render() {
    return (
      <div>
        <input type='text' id='stock-search-input' />
        <button onClick={this.props.onSearch}>Search</button>
      </div>
    );
  }
}
