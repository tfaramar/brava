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
        <>
            {/* <Link to="/routes/new">
                <button className="header-button create-route">Create Route</button>
            </Link>
            <button className="header-button nav-logout" onClick={logout}>Log Out</button> */}
            <div className="left-group">
                <div className="nav-dash-dropdown">
                    <p className="text-med">Dashboard <i className="fas fa-angle-down"></i></p>
                </div>
            </div>
            <div className="right-group">
                <div className="nav-image-dropdown">
                    <div className="nav-image-wrapper">
                        <img className="nav-image" src={window.demo_avatar_imgURL} alt="Your profile photo" />
                    </div>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="nav-circle-dropdown">
                    <div className="nav-circle"><i className="fas fa-plus-circle"></i></div>
                </div>
                
            </div>
        </>
    );


    return (
        <div className="nav-bar-container">
            <Link to="/" className="header-link">
                <h1 className="logo">BRAVA</h1>
            </Link>
            <div className="nav-container">
                {currentUser ? personalNav() : sessionLinks()}
            </div>
        </div>
    );
};

export default Nav;