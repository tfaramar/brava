import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {

    let sessionButton;
    if (window.location.hash === "#/login") {
        sessionButton = <Link to="/signup"><button className="nav-signup">Sign up</button></Link>
    } else if (window.location.hash === "#/signup" || window.location.hash === "#/" && !currentUser) {
        sessionButton = <Link to="/login"><button className="nav-login">Login</button></Link>
    };

    const sessionLinks = (
        <ul className="session-nav-group">
            {sessionButton}  
        </ul>
    );

    const personalNav = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.firstName}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    //return currentUser ? personalNav() : sessionLinks();
    return (
        <div className="nav-bar-container">
            <Link to="/" className="header-link">
                <h1 className="logo">STRAVA</h1>
            </Link>
            <div className="nav-container">
                {sessionLinks}
            </div>
        </div>
    );
};

export default Nav;