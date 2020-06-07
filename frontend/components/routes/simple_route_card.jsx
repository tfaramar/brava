import React from 'react';

import RouteMap from './route_map';
import { formatTime } from '../../util/helper_functions';

const SimpleRouteCard = ({ route, idx, selectRoute, routeSelected }) => {
    const secondClass = routeSelected === idx ? "selected" : "";

    return (
        <div onClick={() => selectRoute(idx)} className={`simple-route-card ${secondClass}`}>
            <div className="route-map-embed">
                <RouteMap coordinates={route.coordinates} container={`map-route-${route.id}`} />
            </div>
            <div className="route-content">
                <h2 className="route-title">{route.title}</h2>
                <ul className="list-stats">
                    <li className="stat">
                        <div className="stat-subtext">Distance</div>
                        <div className="stat-text">{route.distance} mi</div>
                    </li>
                    <li className="stat">
                        <div className="stat-subtext">Est. Time</div>
                        <div className="stat-text">{formatTime(route.time)}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SimpleRouteCard;