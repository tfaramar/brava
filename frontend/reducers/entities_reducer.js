import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import activitiesReducer from './activities_reducer';
import kudosReducer from './kudos_reducer';
import routesReducer from './routes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: activitiesReducer,
    kudos: kudosReducer,
    routes: routesReducer
});

export default entitiesReducer;