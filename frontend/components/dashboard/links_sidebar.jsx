import React from 'react';

const LinksSidebar = () => {
    return (
        <div className="links-sidebar-container">
            <div className="links-card">
                <div className="links-card-text-center">
                    <h1 className="links-header">Hey there!</h1>
                    <p className="text-med">Thanks for exploring Brava. For more information on this project, check out the repo on <strong><a className="fav-link" href="https://github.com/tfaramar/strava/">Github.</a></strong></p>
                    <p className="text-med">You can also find me here:</p>
                    <div className="fav-links">
                        <a className="fav-link" href="https://www.linkedin.com/in/tatiana-faramarzi-598897174/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="fav-link" href="https://github.com/tfaramar"><i className="fab fa-github"></i></a>
                        <a className="fav-link" href="https://angel.co/tatiana-faramarzi"><i className="fab fa-angellist"></i></a>  
                    </div>
                </div>  
            </div>   
        </div>
    )
}

export default LinksSidebar