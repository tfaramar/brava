import {
    RECEIVE_ACTIVITIES,
    RECEIVE_ACTIVITY,
    REMOVE_ACTIVITY
} from '../actions/activity_actions';

import {
    RECEIVE_KUDO,
    REMOVE_KUDO
} from '../actions/kudos_actions';

const ActivitiesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ACTIVITIES:
            return Object.assign({}, state, action.activities);
        case RECEIVE_ACTIVITY:
            return Object.assign({}, state, {
                [action.activity.id]: action.activity
            })
        case REMOVE_ACTIVITY:
            delete nextState[action.activityId] 
            return nextState;
        case RECEIVE_KUDO:
            let act = nextState[action.kudo.activity_id]
            act.kudoers.push(action.kudo.user_id)
            return nextState;
        // case REMOVE_KUDO:
            
        default:
            return state;
    }
};

export default ActivitiesReducer;