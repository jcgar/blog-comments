import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { paramsToProps } from 'provide-router';
import * as components from './index';

const {
  Lumbur,
  Home,
  UserLogIn,
  UserProfile,
  NotFound
} = components;

const App = () => (
  <Router createElement={paramsToProps}>
    <Route path="/login" component={UserLogIn} />

    <Route path="/" component={Lumbur}>
      <IndexRoute component={Home} />

      <Route path="user" component={UserProfile}>
        <Route path=":userName" />
      </Route>
    </Route>

    <Route path="*" component={NotFound} />
  </Router>
);

export default App;
export { components };
