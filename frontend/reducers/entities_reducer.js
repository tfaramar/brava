import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import activitiesReducer from './activities_reducer';
import kudosReducer from './kudos_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: activitiesReducer,
    kudos: kudosReducer
});

export default entitiesReducer;