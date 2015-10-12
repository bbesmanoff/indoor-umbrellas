import React, {Component} from 'react';
import ReactTestTools from 'react-addons-test-utils';

export default class StockSearchBar extends Component {
  onTextChange(e) {
    if (e.nativeEvent.keyCode === 13) {
      this.props.onSearch();
    }
  }

  render() {
    return (
      <div>
        <input type='text' id='stock-search-input'
          onKeyPress={this.onTextChange.bind(this)}/>
        <button onClick={this.props.onSearch}>Search</button>
      </div>
    );
  }
}
