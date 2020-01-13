import React from 'react';

import ActivityIndexCard from './activity_index_card';

class ActivityIndex extends React.Component {
    constructor(props) {
        super(props);

        this.isBottom = this.isBottom.bind(this);
        this.trackScrolling = this.trackScrolling.bind(this);
    }

    //from: https://stackoverflow.com/a/45586395
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
        this.props.fetchActivities();
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling() {
        const wrappedElement = document.getElementById('big-div');
        if (this.isBottom(wrappedElement)) {
            console.log('big div bottom reached');
            //document.removeEventListener('scroll', this.trackScrolling);
        }
    };

    render() {
        const { activities, users, kudos, errors, currentUser, createKudo, deleteKudo } = this.props;
        
        const findKudos = (stateKudos, kudoIds) => {
            let kudosObjects = [];
            for (let i=0;i<kudoIds.length;i++){
                let id = kudoIds[i];
                kudosObjects.push(stateKudos[id])
            }
            return kudosObjects;
        }
        
        return (
            <div className="activity-feed-container" id="big-div">
                <div className="feed-header">
                    <div className="feed-dropdown">
                        <button type="button" className="feed-toggle">
                            <h2>Your Activities</h2>
                        </button>
                    </div>
                </div>
                
                <div className="activity-feed">
                    {
                      activities.map(act => <ActivityIndexCard key={act.id} activity={act} user={users[act.userId]} kudos={findKudos(kudos, act.kudoIds)} currentUser={currentUser} createKudo={createKudo} deleteKudo={deleteKudo}/>)  
                    }
                </div>
            </div>
        )
    }
}

export default ActivityIndex;