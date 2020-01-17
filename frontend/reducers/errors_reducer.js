import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import activitiesErrorsReducer from './activities_errors_reducer';
import routesErrorsReducer from './routes_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    activities: activitiesErrorsReducer,
    routes: routesErrorsReducer
});

export default errorsReducer;