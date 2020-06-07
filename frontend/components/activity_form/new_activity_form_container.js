import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {  createActivity, removeErrors } from '../../actions/activity_actions';
import { fetchRoutes } from '../../actions/route_actions';
import { selectRoutes } from '../../reducers/selectors';
import ActivityForm from './activity_form';

const mapStateToProps = state => ({
    errors: state.errors.activities,
    formType: 'Create',
    message: 'Manual Activity Entry',
    routes: selectRoutes(state),
    user: state.session.id 
});

const mapDispatchToProps = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes()),
    processForm: (activity) => dispatch(createActivity(activity)),
    removeErrors: () => removeErrors(dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityForm));
