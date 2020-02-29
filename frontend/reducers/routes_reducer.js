import {
    RECEIVE_ROUTES,
    RECEIVE_ROUTE,
    REMOVE_ROUTE
} from '../actions/route_actions';

const routesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ROUTES:
            return Object.assign({}, state, action.data);
        case RECEIVE_ROUTE:
            return Object.assign({}, state, {
                [action.route.id]: action.route
            })
        case REMOVE_ROUTE:
            let nextState = Object.assign({}, state);
            delete nextState[action.route.id]
            return nextState;
        default: 
            return state;
    }
};

export default routesReducer;