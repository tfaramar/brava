import React from 'react';

class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.route = JSON.parse(this.props.coordinates);
        
        this.state = {
            map: ""
        }
    }

    componentDidMount() {
        let routeCopy = this.route.slice();
        console.log("ROUTE COPY", routeCopy);
        let routeCenter = routeCopy.sort()[Math.floor(routeCopy.length/2)]
        console.log("ROUTE CENTER", routeCenter);
        mapboxgl.accessToken = `${window.mapboxAPIKey}`;
        this.map = new mapboxgl.Map({
            container: this.props.container,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: routeCenter,
            zoom: 9,
            interactive: false
        });
        console.log("ROUTE", this.route);
        let map = this.map;
        map.on('load', function() {
            map.addLayer({
                "id": "route",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "LineString",
                            "coordinates": this.route
                        }
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#fc5200",
                    "line-width": 4,
                    "line-opacity": 0.0
                }
            });
        });
    }

    render() {
        return (
            <div id={this.props.container}></div>
        )
    }
}

export default RouteMap;