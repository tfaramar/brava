import React from 'react';

import ActivityIndexCard from './activity_index_card';
class ActivityIndex extends React.Component {
    constructor(props) {
        super(props);

        this.offset = 0;
        this.myFeed = false;
        this.isBottom = this.isBottom.bind(this);
        this.trackScrolling = this.trackScrolling.bind(this);
    }

    //the below was built with reference to: https://stackoverflow.com/a/45586395
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
        this.props.fetchActivities();
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
        this.offset = 0;
    }

    trackScrolling() {
        const wrappedElement = document.getElementById('big-div');
        if (this.isBottom(wrappedElement)) {
            console.log('big div bottom reached');
            this.offset += 5;
            this.props.fetchMoreActivities(this.offset, this.myFeed);
        }
    };

    changeActivityFeed() {
        this.myFeed = !this.myFeed;
        this.offset = 0;
        this.props.fetchActivities(0, this.myFeed)
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

        const toggleDropdown = (id) => {
            document.getElementById(id).classList.toggle("show");
        }

        window.onclick = (e) => {
            if (!e.target.matches('.feed-toggle') && !e.target.matches('.toggle-title')) {
                let dropdown = document.getElementById("dropdown");
                if (dropdown.classList.contains("show")) {
                    dropdown.classList.remove("show");
                }
            } 
        }

        return (
            <div className="activity-feed-container" id="big-div">
                <div className="feed-header">
                    
                    <div className="feed-dropdown">
                        <button type="button" className="feed-toggle" onClick={() => toggleDropdown("dropdown")}>
                            <h2 className="toggle-title">{this.myFeed ? 'My Activities' : 'Following'}</h2>
                            <span><i className="fas fa-angle-down"></i></span> 
                        </button>
                        <div id="dropdown" className="dropdown-content">
                            <button type="button" onClick={() => this.changeActivityFeed()}>{this.myFeed ? 'Following' : 'My Activities'}</button>
                        </div>
                    </div>
                </div>
                
                <div className="activity-feed">
                    {
                      activities.reverse().map(act => <ActivityIndexCard key={act.id} activity={act} user={users[act.userId]} kudos={findKudos(kudos, act.kudoIds)} currentUser={currentUser} createKudo={createKudo} deleteKudo={deleteKudo}/>)  
                    }
                </div>
            </div>
        )
    };
};

export default ActivityIndex;