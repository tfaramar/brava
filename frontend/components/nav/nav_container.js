import { connect } from 'react-redux';

import { logout, removeErrors } from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id] 
});
        

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    removeErrors: () => removeErrors(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);