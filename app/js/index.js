import React from 'react';
import Router from 'react-router';

const {Route, RouteHandler} = Router;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>asdf</h1>

        <RouteHandler/>
      </div>
    );
  }
}

const routes = (
  <Route name='app' path='/' handler={App}>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('main'));
});
