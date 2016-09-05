import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { paramsToProps } from 'provide-router';
import * as components from './index';

const {
  Bloggur,
  EntryCreator,
  EntryEditor,
  Entry,
  Home,
  UserLogIn,
  UserProfile,
  NotFound,

  LatestCommentList,
  Comment,
  CommentCreator,
  EntryViewer,

} = components;

const routes = {
  login: () => "/login",
  blogNew: () => "/blog/create",
  blogDetail: (userName,entryId,entrySlug) => `/blog/${userName}/${entryId}/${entrySlug}`,
  blogEdit: (entryId,entrySlug) => `/blog/:userName/edit/${entryId}/${entrySlug}`,
  blogUserDetail: (userName) => `/blog/${userName}`,
}



const routeElements = (
  <Router createElement={paramsToProps}>
    <Route path="/login" component={UserLogIn} />

    <Route path="/" component={Bloggur}>
      <IndexRoute component={Home} />

      <Route path="blog" component={UserProfile}>
        <Route path="create" component={EntryCreator} />

        <Route path=":userName">
          <Route path="edit/:entryId" component={EntryEditor}>
            <Route path=":entrySlug" />
          </Route>

          <Route path=":entryId" component={EntryViewer}>
            <Route path=":entrySlug" />
          </Route>
        </Route>
      </Route>
    </Route>

    <Route path="*" component={NotFound} />
  </Router>
);

const App = () => (routeElements);
export default App;
export { components, routes, routeElements };
