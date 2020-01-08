import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className="splash-container">
            <div className="splash-box">
                <h1 className="splash-message">The #1 app for runners and cyclists</h1>
                <div className="splash-content">
                    <img className="splash-image" src={window.splash_imgURL} alt="Strava mobile preview" />
                    <div className="splash-text">
                        <button>Sign up with Google</button>
                        <br/>
                        <p>or</p>
                        <br/>
                        <Link to="/signup"><button>Use my email</button></Link>
                        <br/>
                        <br/>
                        <p>Already a Member? <Link className="blue-link" to="/login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default Splash;