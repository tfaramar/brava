import {
    RECEIVE_ACTIVITIES,
    RECEIVE_MORE_ACTIVITIES,
    RECEIVE_ACTIVITY,
    REMOVE_ACTIVITY
} from '../actions/activity_actions';
import { 
    REMOVE_KUDO,
    RECEIVE_KUDO
} from '../actions/kudos_actions';

const ActivitiesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ACTIVITIES:
            return Object.assign({}, action.data.activities);
        case RECEIVE_MORE_ACTIVITIES:
            return Object.assign({}, state, action.data.activities)
        case RECEIVE_ACTIVITY:
            return Object.assign({}, state, {
                [action.activity.id]: action.activity
            })
        case REMOVE_ACTIVITY:
            delete nextState[action.activityId] 
            return nextState;
        case REMOVE_KUDO:
            let activity = nextState[action.kudo.activityId]
            activity.kudoIds = activity.kudoIds.filter(k => k !== action.kudo.id)
            return nextState;
        case RECEIVE_KUDO:
            let act = nextState[action.kudo.activityId]
            act.kudoIds.push(action.kudo.id)
            return nextState;
        default:
            return state;
    }
};

export default ActivitiesReducer;