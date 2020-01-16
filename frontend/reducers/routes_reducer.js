import {
    RECEIVE_ROUTES,
    RECEIVE_ROUTE,
    REMOVE_ROUTE
} from '../actions/route_actions';
//need to import anything else into this slice of state? Or, do you want to send the route information with the activities?

const routesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_ROUTES:
            return Object.assign({}, action.data.routes);
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