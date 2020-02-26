import React from 'react';
import { Link } from 'react-router-dom';

import { formatDateFull, formatTime } from '../../util/helper_functions';


const ActivityIndexCard = ({ activity, user, kudos, currentUser, createKudo, deleteKudo }) => {
    
    const currentUserHasKudoed = (kudos) => {
        if (kudos) {
            for(let i=0; i<kudos.length; i++){
                let kudo = kudos[i];
                if (kudo.userId === currentUser.id) {
                    return kudo.id;
                }
            }
        }
        return null;
    };

    const thisKudo = currentUserHasKudoed(kudos);

    const kudoedButton = (kudoId) => {
        return (
            <button type="button" className="active-kudo kudo-button" onClick={() => deleteKudo(kudoId)}>
                <i className="fas fa-thumbs-up"></i>
            </button>
        )
    }

    const unkudoedButton = (
        <button type="button" className="inactive-kudo kudo-button" onClick={() => createKudo(activity.id)}>
            <i className=" far fa-thumbs-up"></i>
        </button>
    )

    return (
        <div className="entry-card">
            <div className="entry-header">
                <div className="avatar-wrapper">
                    <img src={`${user.photoUrl}`} alt="user avatar"/>
                </div>
                <div className="entry-header-content">
                    <Link className="link" to={`/athletes/${user.id}`}>
                        <h2 className="entry-owner">{`${user.firstName} ${user.lastName}`}</h2>
                    </Link>
                    <p className="timestamp">{formatDateFull(activity.startTime)}</p>
                </div>
            </div>
            <div className="entry-body">
                <span className="icon">
                    <i className={activity.sport === 1 ? "fas fa-biking" : "fas fa-running"}></i>
                </span>
                <div className="entry-body-content">
                    <Link className="link" to={`/activities/${activity.id}`}>
                        <h1 className="entry-title">{activity.title}</h1>
                    </Link>
                    <ul className="list-stats">
                        <li className="stat">
                            <div className="stat-subtext">Distance</div>
                            <div className="stat-text">{activity.distance} mi</div>
                        </li>
                        <li className="stat">
                            <div className="stat-subtext">Elev Gain</div>
                            <div className="stat-text">{activity.elevation} ft</div>
                        </li>
                        <li className="stat">
                            <div className="stat-subtext">Time</div>
                            <div className="stat-text">{formatTime(activity.time)}</div>
                        </li>
                    </ul>
                </div>
                
                
            </div>
            <div className="entry-media">

            </div>
            <div className="entry-footer">
                <p className="kudo-count">{kudos.length ? `${kudos.length} kudos` : 'Be the first to give kudos!'}</p>
                {thisKudo ? kudoedButton(thisKudo) : unkudoedButton}
            </div>
        </div>
    ) 
};

export default ActivityIndexCard;