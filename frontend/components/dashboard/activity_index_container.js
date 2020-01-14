import { connect } from 'react-redux';

import { fetchActivities } from '../../actions/activity_actions';
import { selectAllActivities } from '../../reducers/selectors';
import { createKudo, deleteKudo } from '../../actions/kudos_actions';
import ActivityIndex from './activity_index';

const mapStateToProps = state => ({
    errors: state.errors.activities,
    activities: selectAllActivities(state),
    users: state.entities.users,
    kudos: state.entities.kudos,
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchActivities: (offset, my_feed) => dispatch(fetchActivities(offset, my_feed)),
    createKudo: (activityId) => dispatch(createKudo(activityId)),
    deleteKudo: (kudoId) => dispatch(deleteKudo(kudoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex);