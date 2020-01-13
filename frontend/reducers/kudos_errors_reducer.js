import { 
    RECEIVE_KUDO_ERRORS,
    RECEIVE_KUDO,
    REMOVE_KUDO
} from '../actions/kudos_actions';

const kudosErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_KUDO:
            return [];
        case REMOVE_KUDO:
            return [];
        case RECEIVE_KUDO_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default kudosErrorsReducer;