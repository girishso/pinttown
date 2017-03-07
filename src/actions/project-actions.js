import * as types from '../actions/action-types';

export function getProjectSuccess(project) {
  return {
    type: types.GET_PROJECT_SUCCESS,
    project
  };
}

export function getProjectsListSuccess(project) {
  return {
    type: types.GET_PROJECTS_LIST_SUCCESS,
    project
  };
}

export function getCommentsSuccess(comments) {
  return {
    type: types.GET_COMMENTS_SUCCESS,
    comments
  };
}
