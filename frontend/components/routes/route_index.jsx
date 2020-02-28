import React from 'react';

import RouteIndexCard from './route_index_card';

class RouteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRoutes()
    }

    toggleSport(e) {
        console.log('sport toggled!')
    }

    render () {
        const { routes, errors, deleteRoute } = this.props;
        console.log('render!')
        return (
            <div className="routes-page-container">
                <div className="routes-page-header">
                    <h1>My Routes</h1>
                    <button type="button">Create New Route</button>
                </div>
                <div>
                    <div className="toggle-wrapper">
                        <button className="toggle-ride active" type="button" onClick={(e) => this.toggleSport(e)}>Cycling</button>
                        <button className="toggle-run" type="button" onClick={(e) => this.toggleSport(e)}>Running</button>
                    </div>
                    <div className="route-feed">
                       {
                           routes.length > 0 ? routes.map(route => <RouteIndexCard key={route.id} route={route} deleteRoute={deleteRoute}/>) : <h2>You haven't created any routes yet. Get started using the button above!</h2>
                       } 
                    </div>
                </div>
            </div>  
        )
    }
};

export default RouteIndex;