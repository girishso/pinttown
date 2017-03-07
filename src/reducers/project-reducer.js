import * as types from '../actions/action-types';

const initialState = {
  project: {}
};

const projectReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PROJECT_SUCCESS:
      return Object.assign({}, state, { project: action.project });

    default:
      return state;

  }
}

export default projectReducer;
