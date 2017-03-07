import * as types from '../actions/action-types';

const initialState = {
  projects: []
};

const projectsListReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PROJECTS_LIST_SUCCESS:
      return Object.assign({}, state, { projects: action.project.projects });

    default:
      return state;

  }
}

export default projectsListReducer;
