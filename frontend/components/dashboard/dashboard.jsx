import React from 'react';

import UserSidebarContainer from './user_sidebar_container';
import ActivityIndexContainer from './activity_index_container';

const Dashboard = () => {

    return (
        <div className="dashboard">
            <UserSidebarContainer />
            <ActivityIndexContainer />
        </div>
    )   
};

export default Dashboard;