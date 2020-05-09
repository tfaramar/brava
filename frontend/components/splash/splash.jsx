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
                        <a className="broad-link" href="https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=541588808765.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.strava.com%2Fo_auth%2Fgoogle&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me+email+profile&state=%7B%22context%22%3A%22google_web_signup_flow_v1%22%2C%22state%22%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGF0ZV9wYXJhbSI6bnVsbH0.OkuxIgM74dkZudoQHhtChBj9xXMG7N4e_TtWTq4KfEA%22%7D"><i className="fab fa-google"></i> &nbsp; Sign up with Google</a>
                        <br/>
                        <p>or</p>
                        <br/>
                        <Link to="/signup"><button> <i className="far fa-envelope"></i> &nbsp; Use my email</button></Link>
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