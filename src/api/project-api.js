import axios from 'axios';
import store from '../store';
// import be from './be';
import { getProjectSuccess, getCommentsSuccess, getProjectsListSuccess } from '../actions/project-actions';
import { showErrorNotification, showSuccessNotification } from '../actions/notification-actions';

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    store.dispatch(showErrorNotification(error.message || "Something went wrong"));
    return Promise.reject(error);
  });


// const API_ROOT = 'https://crossorigin.me/http://www.behance.net/v2'
const API_ROOT = 'http://cuberoot.in:8080/http://www.behance.net/v2'
// const API_ROOT = 'http://localhost:3004'
// const API_ROOT = 'http://localhost:8080/v2'
const client_id = 'zAfaQfvw7LHUvnj4IRfolHMdh07R2Oll'

export function getProject(project_id) {
  return axios.get(`${API_ROOT}/projects/${project_id}?client_id=${client_id}`)
    .then(response => {
      store.dispatch(getProjectSuccess(response.data));
      return response;
    });
}

export function getProjectsList() {
  return axios.get(`${API_ROOT}/projects?client_id=${client_id}`)
    .then(response => {
      store.dispatch(getProjectsListSuccess(response.data));
      return response;
    });
}

export function getProjectComments(project_id) {
  return axios.get(`${API_ROOT}/projects/${project_id}/comments?client_id=${client_id}`)
    .then(response => {
      store.dispatch(getCommentsSuccess(response.data));
      return response;
    });
}
