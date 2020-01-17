import React from 'react';

import UserSidebarContainer from './user_sidebar_container';
import ActivityIndexContainer from './activity_index_container';
import LinksSidebar from './links_sidebar';
import RouteBuilder from '../routes/route_builder';

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* <UserSidebarContainer />
            <ActivityIndexContainer />
            <LinksSidebar /> */}
            <RouteBuilder />
        </div>
    )   
};

export default Dashboard;