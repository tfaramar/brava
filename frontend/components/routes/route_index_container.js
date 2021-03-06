import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectRoutes } from '../../reducers/selectors';
import { fetchRoutes } from '../../actions/route_actions';
import RouteIndex from './route_index';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    routes: selectRoutes(state),
    errors: state.errors.routes
});

const mapDispatchToProps = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes()),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteIndex));