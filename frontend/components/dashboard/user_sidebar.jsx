import React from 'react';

const UserSidebar = ({ currentUser, fetchActivity }) => {
    return (
        <div className="user-sidebar-container">
            <div className="sidebar-athlete-profile">
                <div className="card-text-center">
                    <h1>{currentUser.firstName} {currentUser.lastName}</h1>
                    <ul className="list-stats">
                        <li className="stat">
                            <div className="stat-subtext">Following</div>
                            <div className="stat-text">{currentUser.followees}</div>
                        </li>
                        <li className="stat">
                            <div className="stat-subtext">Followers</div>
                            <div className="stat-text">{currentUser.followers}</div>
                        </li>
                        <li className="stat">
                            <div className="stat-subtext">Activities</div>
                            <div className="stat-text">{currentUser.activities}</div>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default UserSidebar;