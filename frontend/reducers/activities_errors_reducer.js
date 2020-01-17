import { 
    RECEIVE_ACTIVITY_ERRORS, 
    RECEIVE_ACTIVITY, 
    RECEIVE_ACTIVITIES 
} from '../actions/activity_actions';

const activitiesErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            return [];
        case RECEIVE_ACTIVITY:
            return [];
        case RECEIVE_ACTIVITY_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default activitiesErrorsReducer;