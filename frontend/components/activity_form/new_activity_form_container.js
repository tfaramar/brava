import { connect } from 'react-redux';

import {  createActivity, removeErrors } from '../../actions/activity_actions';
import ActivityForm from './activity_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.activities,
    formType: 'Create',
    message: 'Manual Entry'
});

const mapDispatchToProps = dispatch => ({
    processForm: (activity) => dispatch(createActivity(activity)),
    removeErrors: () => removeErrors(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);
