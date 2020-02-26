import { connect } from 'react-redux';

import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session, 
    formType: 'Log In',
    message: 'Log In'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => removeErrors(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
