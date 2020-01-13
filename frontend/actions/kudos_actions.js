import * as APIUtil from '../util/kudo_api_util';

export const REMOVE_KUDO = 'REMOVE_KUDO';
export const RECEIVE_KUDO = 'RECEIVE_KUDO';
export const RECEIVE_KUDO_ERRORS = 'RECEIVE_KUDO_ERRORS';

export const receiveKudo = kudo => ({
    type: RECEIVE_KUDO,
    kudo
});

export const removeKudo = kudo => ({
    type: REMOVE_KUDO,
    kudo
});

export const receiveErrors = errors => ({
    type: RECEIVE_KUDO_ERRORS,
    errors
});

export const createKudo = activityId => dispatch => (
    APIUtil.createKudo(activityId).then(res => (
        dispatch(receiveKudo(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteKudo = kudoId => dispatch => (
    APIUtil.deleteKudo(kudoId).then(res => (
        dispatch(removeKudo(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);