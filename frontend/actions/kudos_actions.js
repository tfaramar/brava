import * as APIUtil from '../util/kudo_api_util';

export const REMOVE_KUDO = 'REMOVE_KUDO';
export const RECEIVE_KUDO = 'RECEIVE_KUDO';

export const receiveKudo = kudo => ({
    type: RECEIVE_KUDO,
    kudo
});

export const removeKudo = kudoId => ({
    type: REMOVE_KUDO,
    kudoId
});

export const createKudo = activityId => dispatch => (
    APIUtil.createKudo(activityId).then(res => (
        dispatch(receiveKudo(res))
    ))
);

export const deleteActivity = kudoId => dispatch => (
    APIUtil.deleteKudo(kudoId).then(res => (
        dispatch(removeKudo(kudoId))
    ))
);