import { connect } from 'react-redux';
import React from 'react';

import { createRoute } from '../../actions/route_actions';
import RouteBuilder from './route_builder';

const mapStateToProps = ({ session }) => ({
    currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
    createRoute: (route) => dispatch(createRoute(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);