import { combineReducers } from 'redux';

// Reducers
import projectReducer from './project-reducer'
import projectsListReducer from './project-list-reducer'
import { notification } from './notification-reducer'

// Combine Reducers
var reducers = combineReducers({
    projectState: projectReducer,
    projectsListState: projectsListReducer,
    notification
});

export default reducers;
