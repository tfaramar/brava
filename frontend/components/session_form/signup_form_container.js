import { connect } from 'react-redux';
import React from 'react';

import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up',
    message: 'Join Strava today, it\'s Free.'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
