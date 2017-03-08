import * as types from '../actions/action-types';

const initialState = {
  comments: []
};

const commentsReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_COMMENTS_SUCCESS:
      return Object.assign({}, state, { project: action.comments.comments });

    default:
      return state;

  }
}

export default commentsReducer;
