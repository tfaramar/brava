import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { 
    RECEIVE_ACTIVITIES,
    RECEIVE_MORE_ACTIVITIES 
} from '../actions/activity_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { 
                [action.currentUser.id]: action.currentUser
            })
        case RECEIVE_ACTIVITIES:
            return Object.assign({}, state, action.data.users)
        case RECEIVE_MORE_ACTIVITIES:
            return Object.assign({}, state, action.data.users)
        case RECEIVE_USER:
            return Object.assign({}, state, {
                [action.user.id]: action.user
            })
        default:
            return state;
    }
};

export default usersReducer;