import React from 'react';

import { formatDate } from '../../util/helper_functions';

const RouteIndexCard = ({ route }) => {
    return (
        <div className="route-card">
            <div className="map-embed">
                MAP
            </div>
            <div className="route-content">
                <h3>{route.title}</h3>
                <p>Created on {formatDate(route.createdAt)}</p>
            </div>
        </div>
    )
}

export default RouteIndexCard;