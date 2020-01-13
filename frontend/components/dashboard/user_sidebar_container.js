import { connect } from 'react-redux';

import { fetchActivity } from '../../actions/activity_actions';
import UserSidebar from './user_sidebar';

const mapStateToProps = state => ({
    //set up user errors reducer and include here
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchActivity: (activityId) => dispatch(fetchActivity(activityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSidebar);