import React from 'react';
import { connect } from 'react-redux';
import ProjectsList from '../views/projects-list';
import Loading from '../views/loading'
import * as projectApi from '../../api/project-api';

const ProjectsListContainer = React.createClass({

  componentWillMount: function() {
    projectApi.getProjectsList()
  },

  render: function() {
    if(this.props.projects.length === 0) {
      return <Loading />;
    }

    return (
      <ProjectsList projects={this.props.projects} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    projects: store.projectsListState.projects
  };
};

export default connect(mapStateToProps)(ProjectsListContainer);
