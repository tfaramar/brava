import React from 'react';

import ActivityIndexContainer from './activity_index_container';

class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.isBottom = this.isBottom.bind(this);
        this.trackScrolling = this.trackScrolling.bind(this);
    }

    //from: https://stackoverflow.com/a/45586395
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
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
        return (
            <div className="dashboard">
                <ActivityIndexContainer />
                <div id="big-div">

                    BIG DIV
                    
                </div>
            </div>
        )
    };   
}

export default Dashboard;