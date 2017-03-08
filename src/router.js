import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages
import ProjectContainer from './components/containers/project-container';
import ProjectsListContainer from './components/containers/projects-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={ProjectsListContainer} />
      <Route path="projects" >
        <Route path=":project_id" component={ProjectContainer} />
      </Route>
    </Route>
  </Router>
);
