import * as types from '../actions/action-types';

export function getProjectSuccess(project) {
  return {
    type: types.GET_PROJECT_SUCCESS,
    project
  };
}
