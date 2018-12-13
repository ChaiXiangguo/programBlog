import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './page/app/App';
// import Home from './page/home';
// import Blog from './page/blog';
// import User from './page/user';
const Root = () => (
  <div>
    <Router>
        <Switch>
          <Route path="/" component={App}>
          </Route>
        </Switch>
     </Router>
  </div>
);

export default Root;