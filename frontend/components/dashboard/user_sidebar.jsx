import React from 'react';
import { formatDate } from '../../util/helper_functions';

class UserSidebar extends React.Component {
    constructor(props) {
        super(props);  
    }
    
    render() {
        const {currentUser} = this.props;

        const latestActivity = (
            <>
                <p className="text-small">Latest Activity</p>
                <p className="text-small"><strong>{currentUser.latestActivity ? currentUser.latestActivity.title : ""} &#9679;</strong> {currentUser.latestActivity ? formatDate(currentUser.latestActivity.start_time) : ""}</p>
            </>
            )

        const noActivity = (
            <p className="text-small">Get started by tracking your first workout!</p>
        )

        return (
            <div className="sidebar">
                <div className="user-sidebar-container">
                    <div className="sidebar-athlete-profile">
                        <div className="avatar-image-wrapper">
                           <img className="avatar-image" src={currentUser.photoUrl} alt="Your profile photo" />
                        </div>
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
                                    <div className="sidebar-stat-text">{currentUser.activityIds ? currentUser.activityIds.length : "0"}</div>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            {currentUser.latestActivity ? latestActivity : noActivity}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default UserSidebar;