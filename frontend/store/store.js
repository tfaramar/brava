import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; //add back in for further development

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;