import { connect } from 'react-redux';

import { fetchActivities } from '../../actions/activity_actions';
import { selectAllActivities } from '../../reducers/selectors';
import ActivityIndex from './activity_index';

const mapStateToProps = state => ({
    errors: state.errors.activities,
    activities: selectAllActivities(state)
});

const mapDispatchToProps = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityIndex);