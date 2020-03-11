import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger'; //apply this middleware when back in dev

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;