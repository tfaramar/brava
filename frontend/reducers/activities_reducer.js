import {
    RECEIVE_ACTIVITIES,
    RECEIVE_ACTIVITY,
    REMOVE_ACTIVITY
} from '../actions/activity_actions';

const ActivitiesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ACTIVITIES:
            return Object.assign({}, state, action.activities);
        case RECEIVE_ACTIVITY:
            return Object.assign({}, state, {
                [action.activity.id]: action.activity
            })
        case REMOVE_ACTIVITY:
            let nextState = Object.assign({}, state)
            delete nextState[action.activityId] 
            return nextState;
        default:
            return state;
    }
};

export default ActivitiesReducer;