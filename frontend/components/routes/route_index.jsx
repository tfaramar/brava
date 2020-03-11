import React from 'react';

import RouteIndexCard from './route_index_card';

class RouteIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "cycling",
            sport: 1
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchRoutes()
    }

    toggleSport(e) {
        let run = document.getElementsByClassName("ri-toggle-run")[0];
        let ride = document.getElementsByClassName("ri-toggle-ride")[0];
        if (e.target.classList.contains("ri-toggle-run")) {
            this.setState({
                type: "running",
                sport: 2
            });
            ride.classList.remove("ri-active");
            run.classList.add("ri-active");
        } else if (e.target.classList.contains("ri-toggle-ride")) {
            this.setState({
                type: "cycling",
                sport: 1
            });
            run.classList.remove("ri-active");
            ride.classList.add("ri-active");
        }
    }

    handleClick() {
        this.props.history.push("/routes/new")
    }

    render () {
        const { routes, errors, deleteRoute } = this.props;

        let theseRoutes = routes && routes.length > 0 ? routes.filter(route => route.sport === this.state.sport) : [];

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
                           routes && theseRoutes.length > 0 ? theseRoutes.map(route => <RouteIndexCard key={route.id} route={route} deleteRoute={deleteRoute}/>) : <h2>You haven't created any {this.state.type} routes.</h2>
                       } 
                    </div>
                </div>
            </div>  
        )
    }
};

export default RouteIndex;