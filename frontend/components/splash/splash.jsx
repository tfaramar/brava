import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className="splash-container">
            <div className="splash-box">
                <h1 className="splash-message">The #1 app for runners and cyclists</h1>
                <div className="splash-content">
                    <img className="splash-image" src="assets/devices-splash-header.jpg" alt="Strava mobile preview" />
                </div>
            </div>
        </div>   
    )
};

export default Splash;