import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages
import Home from './components/home';
import ProjectContainer from './components/containers/project-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="projects" >
        <Route path=":project_id" component={ProjectContainer} />
      </Route>
    </Route>
  </Router>
);
