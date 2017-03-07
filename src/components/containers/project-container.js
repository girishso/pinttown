import React from 'react';
import { connect } from 'react-redux';
import Project from '../views/project';
import * as projectApi from '../../api/project-api';

const ProjectContainer = React.createClass({

  componentWillMount: function() {
    const project_id = this.props.params.project_id
    projectApi.getProject(project_id)
  },

  render: function() {
    return (
      <Project project_id={this.props.params.project_id} {...this.props.project} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    project: store.projectState.project
  };
};

export default connect(mapStateToProps)(ProjectContainer);
