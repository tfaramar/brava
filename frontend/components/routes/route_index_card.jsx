import React from 'react';

const RouteIndexCard = ({ route }) => {
    return (
        <div className="route-card">
            <div className="map-embed">
                MAP
            </div>
            <div className="route-content">
                <h3>{route.title}</h3>
                
            </div>
        </div>
    )
}

export default RouteIndexCard;