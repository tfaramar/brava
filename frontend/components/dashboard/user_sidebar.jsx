import React from 'react';
import { formatDate } from '../../util/helper_functions';

class UserSidebar extends React.Component {
    constructor(props) {
        super(props);  
    }
    
    render() {
        const {currentUser} = this.props;

        return (
            <div className="sidebar">
                <div className="user-sidebar-container">
                    <div className="sidebar-athlete-profile">
                        <div className="avatar-image-wrapper">
                            {/* <img className="avatar-image" src={window.demo_avatar_imgURL} alt="Your profile photo" /> */}
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
                                    <div className="sidebar-stat-text">{currentUser.activityIds ? currentUser.activityIds.length : ""}</div>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <p className="text-small">Latest Activity</p>
                            <p className="text-small"><strong>{currentUser.latestActivity ? currentUser.latestActivity.title : ""} &#9679;</strong> {currentUser.latestActivity ? formatDate(currentUser.latestActivity.start_time) : ""}</p>
                        </div>
                    </div>

                </div>
                <div className="links-sidebar-container">
                    <div className="links-card">
                        <div className="links-card-text-center">
                            <h1 className="links-header">Hey there!</h1>
                            <p className="text-med">Thanks for exploring Brava. For more information on this project, check out the repo on <strong><a className="fav-link" href="https://github.com/tfaramar/strava/">Github.</a></strong></p>
                            {/* <p className="text-med">You can also find me here:</p> */}
                            <div className="fav-links">
                                <a className="fav-link" target="_blank" href="https://www.linkedin.com/in/tatiana-faramarzi-598897174/"><i className="fab fa-linkedin-in"></i></a>
                                <a className="fav-link" target="_blank" href="https://github.com/tfaramar"><i className="fab fa-github"></i></a>
                                <a className="fav-link" target="_blank" href="https://angel.co/tatiana-faramarzi"><i className="fab fa-angellist"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default UserSidebar;