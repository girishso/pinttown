import * as types from '../actions/action-types';

const initialState = {
  project: {},
  comments: []
};

const projectReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PROJECT_SUCCESS:
      return Object.assign({}, state, { project: action.project.project });

    case types.GET_COMMENTS_SUCCESS:
      return Object.assign({}, state, { comments: action.comments.comments });

    default:
      return state;

  }
}

export default projectReducer;
