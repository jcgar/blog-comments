import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { paramsToProps } from 'provide-router';
import * as components from './index';

const {
  Bloggur,
  EntryCreator,
  Entry,
  Home,
  UserLogIn,
  UserProfile,
  NotFound
} = components;

const App = () => (
  <Router createElement={paramsToProps}>
    <Route path="/login" component={UserLogIn} />

    <Route path="/" component={Bloggur}>
      <IndexRoute component={Home} />

      <Route component={UserProfile}>
        <Route path="create" component={EntryCreator} />

        <Route path=":userName" />
      </Route>
    </Route>

    <Route path="*" component={NotFound} />
  </Router>
);

export default App;
export { components };
