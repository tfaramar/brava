import React from 'react';

import UserSidebarContainer from './user_sidebar_container';
import ActivityIndexContainer from './activity_index_container';
import ChallengeSidebar from './challenge_sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dash-wrapper">
                <UserSidebarContainer />
                <ActivityIndexContainer />
                <ChallengeSidebar />  
            </div>
        </div>
    )   
};

export default Dashboard;