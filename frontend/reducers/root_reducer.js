import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const appReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_CURRENT_USER) {
        state = {};
    }
    return appReducer(state, action)
};

export default rootReducer;