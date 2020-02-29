import React from 'react';
import { useHistory } from 'react-router-dom';

import RouteIndexCard from './route_index_card';

class RouteIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "cycling"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchRoutes()
    }

    toggleSport(e) {
        console.log('sport toggled!')
    }

    handleClick() {
        this.props.history.push("/routes/new")
    }

    render () {
        const { routes, errors, deleteRoute } = this.props;
        console.log('render!')
        return (
            <div className="routes-page-container">
                <div className="routes-page-header">
                    <h1 className="route-index-title">My Routes</h1>
                    <button className="ri-create-route-button" type="button" onClick={this.handleClick}>Create New Route</button>
                </div>
                <div>
                    <div className="ri-toggle-wrapper">
                        <button className="ri-toggle-ride ri-active" type="button" onClick={(e) => this.toggleSport(e)}>Cycling</button>
                        <button className="ri-toggle-run" type="button" onClick={(e) => this.toggleSport(e)}>Running</button>
                    </div>
                    <div className="ri-route-feed">
                       {
                           routes.length > 0 ? routes.map(route => <RouteIndexCard key={route.id} route={route} deleteRoute={deleteRoute}/>) : <h2>You haven't created any {this.state.type} routes.</h2>
                       } 
                    </div>
                </div>
            </div>  
        )
    }
};

export default RouteIndex;