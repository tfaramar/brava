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
                <h3>{route.title}</h3>
                <p>Created on {formatDate(route.createdAt)}</p>
            </div>
        </div>
    )
}

export default RouteIndexCard;