import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import activitiesReducer from './activities_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: activitiesReducer
});

export default entitiesReducer;