import React from 'react';
import { Link } from 'react-router-dom';

const ActivityIndexCard = ({ activity }) => {

    return (
        <div className="entry-card">
            <div className="entry-header">
                <div className="avatar-wrapper">IMAGE</div>
                <Link to={`/athletes/${activity.userId}`}>
                    <h2>T F</h2>
                </Link>
                <p>{activity.startTime}</p>
            </div>
            <div className="entry-body">
                <span className="icon">ICON</span>
                <Link to={`/activities/${activity.id}`}>
                    <h1>{activity.name}</h1>
                </Link>
                <ul className="list-stats">
                    <li>{activity.distance}</li>
                    <li>{activity.elevation}</li>
                    <li>elapsed time</li>
                </ul>
            </div>
            <div className="entry-media">

            </div>
            <div className="entry-footer">
                KUDOS IN PROGRESS
            </div>
        </div>
    ) 
};

export default ActivityIndexCard;