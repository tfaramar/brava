import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';

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