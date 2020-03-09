import React from 'react';

const ChallengeSidebar = () => {
    return (
        <div className="challenge-sidebar-container">
            <div className="challenge">
                <i className="fas fa-mountain"></i>
                <div className="challenge-content">
                    <h4 className="challenge-header">Challenges</h4>
                    <p>Join a run or cycling challenge to stay on top of your game, earn new achievements and see how you stack up.</p>
                </div>
            </div> 
            <div className="challenge">
                <i className="far fa-flag"></i>
                <div className="challenge-content">
                    <h4 className="challenge-header">Clubs</h4>
                    <p>Why do it alone? Get more out of your experience by joining or creating a club.</p>
                </div>  
            </div>
            <div className="challenge">
                <i className="far fa-eye"></i>
                <div className="challenge-content">
                    <h4 className="challenge-header">Try a Privacy Zone</h4>
                    <p>You can hide the location of your home, office or other private places in your activities.</p>
                </div> 
            </div>
        </div>
    )
}

export default ChallengeSidebar;