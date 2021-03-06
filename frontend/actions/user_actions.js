import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const fetchUser = userId => dispatch => (
    APIUtil.fetchUser(userId).then(res => (
        dispatch(receiveUser(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);