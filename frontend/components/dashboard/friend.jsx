import React from 'react';

export default () => {
    return (
        <div className="friend">
            <div className="friend-icon">
                {/* <img className="avatar-image" src={user.photoUrl} alt="user avatar" /> */}
            </div>
            <div className="friend-info">
                <h2 className="entry-owner">New Friend!</h2>
                <p>city, state</p>
                <p>Follow</p>
            </div>
        </div>
    )
};