import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';
import {createHistory} from 'history';

import Navbar from './components/navbar';

class IndoorUmbrellas extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={createHistory()}>
    <Route path='/router.html' component={IndoorUmbrellas}>
    </Route>
  </Router>
), document.getElementById('app'));
