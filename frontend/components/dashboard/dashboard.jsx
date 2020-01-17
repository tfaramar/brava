import React from 'react';

import UserSidebarContainer from './user_sidebar_container';
import ActivityIndexContainer from './activity_index_container';
import LinksSidebar from './links_sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <UserSidebarContainer />
            <ActivityIndexContainer />
            <LinksSidebar />  
        </div>
    )   
};

export default Dashboard;