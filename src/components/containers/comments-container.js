import React from 'react';
import { connect } from 'react-redux';
import Comments from '../views/comments';
import * as projectApi from '../../api/project-api';

const CommentsContainer = React.createClass({

  componentWillMount: function() {
    const project_id = this.props.project_id
    projectApi.getProjectComments(project_id)
  },

  render: function() {
    return (
      <Comments comments={this.props.comments} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    comments: store.projectState.comments
  };
};

export default connect(mapStateToProps)(CommentsContainer);
