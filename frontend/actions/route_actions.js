import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

export const receiveRoutes = data => ({
    type: RECEIVE_ROUTES,
    data
});

export const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
});

export const removeRoute = route => ({
    type: REMOVE_ROUTE,
    route
});

export const receiveErrors = errors => ({
    type: RECEIVE_ROUTE_ERRORS,
    errors
});

export const fetchRoutes = () => dispatch => (
    APIUtil.fetchRoutes().then(res => {
        console.log(res);
        return dispatch(receiveRoutes(res))
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const fetchRoute = routeId => dispatch => (
    APIUtil.fetchRoute(routeId).then(res => (
        dispatch(receiveRoute(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createRoute = route => dispatch => (
    APIUtil.createRoute(route).then(res => (
        dispatch(receiveRoute(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteRoute = routeId => dispatch => (
    APIUtil.deleteRoute(routeId).then(res => (
        dispatch(removeRoute(res))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);