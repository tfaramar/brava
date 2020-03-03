import React from 'react';

class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.route = JSON.parse(this.props.coordinates); 
        this.map = {};
    }

    componentDidMount() {
        let routeCopy = this.route.slice();
        let routeCenter = routeCopy.sort()[Math.floor(routeCopy.length/2)]
        
        mapboxgl.accessToken = `${window.mapboxAPIKey}`;
        this.map = new mapboxgl.Map({
            container: this.props.container,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: routeCenter,
            zoom: 10,
            interactive: false
        });

        let map = this.map;
        let route = this.route;
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
                            "coordinates": route
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
                    "line-opacity": 0.8
                }
            });
        });
    }

    render() {
        return (
            <div className="route-map" id={this.props.container}></div>
        )
    }
}

export default RouteMap;