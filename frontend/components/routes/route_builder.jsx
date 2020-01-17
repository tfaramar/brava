import React from 'react';

import RouteModal from './route_modal';

class RouteBuilder extends React.Component {
    constructor(props) {
        super(props)
        //this component was built with reference to the following article: https://blog.mapbox.com/map-hacks-directions-api-draw-tools-7557134622e9
        mapboxgl.accessToken = `${window.mapboxAPIKey}`;
        this.state = {
            activityType: 'cycling',
            sport: 1,
            coordinates: {},
            duration: 0,
            distance: 0.00,
            modal: false
        }

        this.map = {};
        this.draw = {};
        this.geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: false
        })

        this.updateRoute = this.updateRoute.bind(this);
        this.addRoute = this.addRoute.bind(this);
        this.removeRoute = this.removeRoute.bind(this);
        this.createMap = this.createMap.bind(this);  
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        //initialize map
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-122.46, 37.7989], //starting centerpoint (SF), eventually should ask user for location and set based on that
            zoom: 12, //initial zoom
            minZoom: 9 //limit zoom
        });

        this.createMap();
    }

    createMap() {
        this.draw = new MapboxDraw({ //initialize the Draw plugin and customize line style
            displayControlsDefault: false,
            controls: {
                line_string: true,
                trash: true
            },
            styles: [
                //line stroke
                {
                    "id": "gl-draw-line",
                    "type": "line",
                    "filter": ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round"
                    },
                    "paint": {
                        "line-color": "#fc5200",
                        "line-dasharray": [0.2, 2],
                        "line-width": 4,
                        "line-opacity": 0.0
                    }
                },
                //vertex point halos
                {
                    "id": "gl-draw-polygon-and-line-vertex-halo-active",
                    "type": "circle",
                    "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
                    "paint": {
                        "circle-radius": 8,
                        "circle-color": "#eee"
                    }
                },
                //vertex points 
                {
                    "id": "gl-draw-polygon-and-line-vertex-active",
                    "type": "circle",
                    "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
                    "paint": {
                        "circle-radius": 6,
                        "circle-color": "#fc5200",
                    }
                }
            ]
        });
        //add gl geocoder (searchbar and functionality) to map
        this.map.addControl(this.geocoder);
        //add gl draw to map
        this.map.addControl(this.draw, 'top-left'); //optional second param of where to add control

        this.map.on('load', () => {
            // console.log('map loaded! controls added.')
        });
        //GL Draw control is aware of the below actions, so we want to call functions when these events happen
        this.map.on('draw.create', this.updateRoute);
        this.map.on('draw.update', this.updateRoute);
        this.map.on('draw.delete', this.removeRoute);
        this.map.on('click', this.updateRoute);
    }

    updateRoute() {
        this.removeRoute(); //this will overwrite any existing route layers (function below)
        let data = this.draw.getAll();
        let answer = document.getElementById('calculated-line');
        let lastFeature = data.features.length - 1;
        let coords = data.features[lastFeature].geometry.coordinates;
        let newCoordinates = coords.join(';');
        this.getMatch(newCoordinates);
    }

    //response from getMatch will pass the directions response back to the updateroute function and update the stats box
    getMatch(e) {
        mapboxgl.accessToken = `${mapboxAPIKey}`;

        //Question: is string interpolation faster than concatenation?
        let url = `https://api.mapbox.com/directions/v5/mapbox/${this.state.activityType}/` + e + '?geometries=geojson&steps=true&&access_token=' + mapboxgl.accessToken;
        let req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', url, true);
        req.onload = () => {
            let jsonResponse = req.response;
            let distance = jsonResponse.routes[0].distance*0.000621371; //this converts to km, modify to convert to miles
            let duration = jsonResponse.routes[0].duration/60; //this converts to minutes
            this.setState({ 
                distance: distance.toFixed(2),
                duration: duration.toFixed(2)
            })
            //document.getElementById('calculated-line').innerHTML = 'Distance: ' + distance.toFixed(2) + ' mi<br>Duration: ' + duration.toFixed(2) + ' seconds'; //modify for appropriate stats
            let coords = jsonResponse.routes[0].geometry;
            this.addRoute(coords); //add route to map
        };
        req.send(); //manually sends request to API!
    }

    addRoute(coords) {
        //check if route is already loaded on this map
        if (this.map.getSource('route')) {
            this.map.removeLayer('route');
            this.map.removeSource('route');
        } else {
            this.map.addLayer({
                "id": "route",
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": coords
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "#fc5200",
                    "line-width": 8,
                    "line-opacity": 0.8
                }
            });
        };

        this.setState({ coordinates: coords.coordinates });
    }

    removeRoute() { //this will remove existing routes on map (source/layer) and clear out stats panel
        if (this.map.getSource('route')) {
            this.map.removeLayer('route');
            this.map.removeSource('route');
            // let stats = Array.from(document.getElementsByClassName('inline-stat'))
            // for (let item of stats) {
            //     item.innerHTML = '0';
            // }
        } else {
            return;
        }
    }

    toggleSport(e) {
        let run = document.getElementsByClassName("toggle-run")[0];
        let ride = document.getElementsByClassName("toggle-ride")[0];
        if (e.target.classList.contains("toggle-run")) {
            this.setState({ 
                activityType: 'walking',
                sport: 2
            });
            ride.classList.remove("active");
            run.classList.add("active");
        } else if (e.target.classList.contains("toggle-ride")) {
            this.setState({ 
                activityType: 'cycling',
                sport: 1 
            });
            run.classList.remove("active");
            ride.classList.add("active");
        }
    }

    toggleModal() {
        this.state.modal === false ? this.setState({ modal: true }) : this.setState({ modal: false});
    }

    render() {
        // console.log(this.state.activityType);
        // console.log(this.state.sport);
        return (
            <div className="map-container">
                <div id="map"></div>
                <div className="save-wrapper">
                    <button className="save-button" type="button" onClick={() => this.toggleModal()}>
                        Save
                    </button>
                </div>
                <div className="toggle-wrapper">
                    <button className="toggle-ride active" type="button" onClick={(e) => this.toggleSport(e)}>Ride</button>
                    <button className="toggle-run" type="button" onClick={(e) => this.toggleSport(e)}>Run</button>
                </div>
                <div className="bottom-panel">
                    <ul className="inline-stats">
                        <li>
                            <strong>{this.state.activityType === "cycling" ? 'Ride' : 'Run'}</strong>
                            <div>Route Type</div>
                        </li>
                        <li className="inline-stat">
                            <strong className="inline-stat">{`${this.state.distance} mi`}</strong>
                            <div>Distance</div>
                        </li>
                        <li className="inline-stat">
                            <strong className="inline-stat">{this.state.duration === 0 ? `0s` : this.state.duration}</strong>
                            <div>Est. Moving Time</div>
                        </li>
                    </ul>
                </div>
                {this.state.modal === true ? <RouteModal 
                        coordinates={this.state.coordinates}
                        sport={this.state.sport}
                        createRoute={this.props.createRoute}
                        toggleModal={this.toggleModal}
                /> : null}
            </div>  
        )
    }
};

export default RouteBuilder;