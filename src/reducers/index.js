import { combineReducers } from 'redux';

// Reducers
import projectReducer from './project-reducer'
import { notification } from './notification-reducer'

// Combine Reducers
var reducers = combineReducers({
    projectState: projectReducer,
    notification
});

export default reducers;
