import { connect } from 'react-redux';
import React from 'react';

import { signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up',
    message: 'Join Brava today, it\'s Free.'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => removeErrors(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
