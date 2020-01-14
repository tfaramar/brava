import {
    REMOVE_KUDO, 
    RECEIVE_KUDO
} from '../actions/kudos_actions';
import {RECEIVE_ACTIVITIES} from '../actions/activity_actions';

const kudosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            return Object.assign({}, state, action.data.kudos);
        case RECEIVE_KUDO:
            return Object.assign({}, state, { 
                [action.kudo.id]: action.kudo
            })
        case REMOVE_KUDO:
            let nextState = Object.assign({}, state)
            delete nextState[action.kudo.id]
            console.log('inside state:', nextState);
            return nextState
        default:
            return state;
    }
}

export default kudosReducer;