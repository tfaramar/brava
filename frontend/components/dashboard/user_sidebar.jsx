import React from 'react';
import { formatDate } from '../../util/helper_functions';

class UserSidebar extends React.Component {
    constructor(props) {
        super(props);  
    }

    // componentDidMount() {
    //     if (this.props.currentUser.activityIds) {
    //         this.props.fetchActivity(this.props.currentUser.activityIds[activityIds.length - 1]);
    //     } 
    // }
    
    render() {
        console.log(formatDate('2015-03-04T00:00:00.000Z'));
        const {currentUser} = this.props;

        return (
            <div className="user-sidebar-container">
                <div className="sidebar-athlete-profile">
                    <div className="card-text-center">
                        <h1>{currentUser.firstName} {currentUser.lastName}</h1>
                        <br />
                        <ul className="sidebar-list-stats">
                            <li className="sidebar-stat">
                                <div className="sidebar-stat-subtext">Following</div>
                                <div className="sidebar-stat-text">{currentUser.followees}</div>
                            </li>
                            <li className="sidebar-stat middle-li">
                                <div className="sidebar-stat-subtext">Followers</div>
                                <div className="sidebar-stat-text">{currentUser.followers}</div>
                            </li>
                            <li className="sidebar-stat">
                                <div className="sidebar-stat-subtext">Activities</div>
                                <div className="sidebar-stat-text">{currentUser.activityIds ? currentUser.activityIds.length : ""}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <p className="text-small">Latest Activity</p>
                        <p className="text-small"><strong>{currentUser.latestActivity ? currentUser.latestActivity.title : ""} &#9679;</strong> {currentUser.latestActivity ? currentUser.latestActivity.start_time : ""}</p>
                    </div>
                </div>

            </div>
        )
    }
    
}

export default UserSidebar;