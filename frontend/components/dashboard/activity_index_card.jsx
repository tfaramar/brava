import React from 'react';
import { Link } from 'react-router-dom';

const ActivityIndexCard = ({ activity, currentUser }) => {
    let kudoCount = activity.kudoerIds.length;

    return (
        <div className="entry-card">
            <div className="entry-header">
                <div className="avatar-wrapper">IMAGE</div>
                <Link to={`/athletes/${activity.userId}`}>
                    <h2>{`${currentUser.firstName} ${currentUser.lastName}`}</h2> 
                </Link>
                <p>{activity.startTime}</p>
            </div>
            <div className="entry-body">
                <span className="icon">ICON</span>
                <Link to={`/activities/${activity.id}`}>
                    <h1>{activity.title}</h1>
                </Link>
                <ul className="list-stats">
                    <li className="stat">
                        <div className="stat-subtext">Distance</div>
                        <div>{activity.distance} mi</div>
                    </li>
                    <li className="stat">
                        <div className="stat-subtext">Elev Gain</div>
                        <div>{activity.elevation} ft</div>
                    </li>
                    <li className="stat">
                        <div className="stat-subtext">Time</div>
                        <div>{activity.elapsedTime}</div>
                    </li>
                </ul>
            </div>
            <div className="entry-media">

            </div>
            <div className="entry-footer">
                <p className="kudo-count">{kudoCount ? `${kudoCount} kudos` : 'Be the first to give kudos!'}</p>
                <span className={activity.kudoerIds.includes(currentUser.id) ? "active-kudo" : "inactive-kudo"}>Thumbs Up Icon</span>
            </div>
        </div>
    ) 
};

export default ActivityIndexCard;