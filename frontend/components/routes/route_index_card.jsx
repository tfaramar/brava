import React from 'react';

import RouteMap from './route_map';
import { formatDate } from '../../util/helper_functions';

const RouteIndexCard = ({ route }) => {
    return (
        <div className="route-card">
            <div className="route-map-embed">
                <RouteMap coordinates={route.coordinates} container={`map-route-${route.id}`}/>
            </div>
            <div className="route-content">
                <h2 className="route-title">{route.title}</h2>
                <p>Created on {formatDate(route.createdAt)}</p>
            </div>
        </div>
    )
}

export default RouteIndexCard;