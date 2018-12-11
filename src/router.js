import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './page/app/App';
import Home from './page/home';
import Blog from './page/blog';
import User from './page/user';
const Root = () => (
  <div>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/user" component={User} />
        </Switch>
      </App>
     </Router>
  </div>
);

export default Root;