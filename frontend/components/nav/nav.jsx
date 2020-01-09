import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout, removeErrors }) => {
    
    const [formType, setFormType] = useState(window.location.hash);

    window.addEventListener('hashchange', () => {
        setFormType(window.location.hash);
    }, false);

    let sessionButton;
    if (formType === "#/login") {
        sessionButton = <Link to="/signup"><button onClick={() => removeErrors()} className="nav-signup">Sign up</button></Link>
    } else if (formType === "#/signup" || formType === "#/" && !currentUser) {
        sessionButton = <Link to="/login"><button onClick={() => removeErrors()} className="nav-login">Login</button></Link>
    };

    const sessionLinks = () => (
        <ul className="session-nav-group">
            {sessionButton}  
        </ul>
    );

    const personalNav = () => (
        <hgroup className="header-group">
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );


    return (
        <div className="nav-bar-container">
            <Link to="/" className="header-link">
                <h1 className="logo">STRAVA</h1>
            </Link>
            <div className="nav-container">
                {currentUser ? personalNav() : sessionLinks()}
            </div>
        </div>
    );
};

export default Nav;