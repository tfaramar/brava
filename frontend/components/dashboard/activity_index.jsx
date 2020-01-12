import React from 'react';

import ActivityIndexCard from './activity_index_card';

class ActivityIndex extends React.Component {
    componentDidMount() {
        this.props.fetchActivities();
        //call fetchUsers here
    }

    render() {
        const { activities, errors, currentUser } = this.props;

        return (
            <div className="activity-feed-container">
                <div className="feed-dropdown">
                    <button type="button" className="feed-toggle">
                        <h2>Your Activities</h2>
                    </button>
                </div>
                {/* <div className="activity-feed">
                    {
                      activities.map(act => <ActivityIndexCard key={act.id} activity={act} currentUser={currentUser} />)  
                    }
                </div> */}
            </div>
        )
    }
}

export default ActivityIndex;