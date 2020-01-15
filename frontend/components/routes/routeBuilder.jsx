import React from 'react';

class RouteBuilder extends React.Component {
    constructor(props) {
        super(props)

        //this component was built with reference to the following article: https://blog.mapbox.com/map-hacks-directions-api-draw-tools-7557134622e9
        mapboxgl.accessToken = 'pk.eyJ1IjoidGZhcmFtYXIiLCJhIjoiY2s1ZDBidW1hMDB2MjNtbzRobmwydzI3cCJ9.d9XMlETjhYMJAplujHt8Pg';

        this.state = {
            sport: 'cycling',
            coordinates: '',
            duration: '',
            distance: ''
        }

        this.map = {};
        this.draw = {};

        this.updateRoute = this.updateRoute.bind(this);
        this.addRoute = this.addRoute.bind(this);
        this.removeRoute = this.removeRoute.bind(this);
        
    }

    componentDidMount() {
         //initialize map
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-122.46, 37.7989], //starting centerpoint (SF), eventually should ask user for location and set based on that
            zoom: 11, //initial zoom
            minZoom: 9 //limit zoom
        });

        //initialize the Draw plugin and customize line style
        this.draw = new MapboxDraw({
            displayControlsDefault: false,
            control: {
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
                        // "line-dasharray": [0.2, 2],
                        "line-width": 4,
                        "line-opacity": 0.7
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

        //add gl draw to map
        this.map.addControl(this.draw);
        //add gl geocoder (searchbar and functionality) to map
        this.map.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            })
        );
    }

    updateRoute() {
        removeRoute(); //this will overwrite any existing route layers (function below)
        let data = this.draw.getAll();
        let answer = document.getElementById('calculated-line');
        let lastFeature = data.features.length - 1;
        let coords = data.features[lastFeature].geometry.coordinates;
        let newCoordinates = coords.join(';');
        this.getMatch(newCoordinates);
    }

    //response from getMatch will pass the directions response back to the updateroute function and update the stats box
    getMatch(e) {
        //need token here?
        //Question: is string interpolation faster than concatenation?
        let url = `https://api.mapbox.com/directions/v5/mapbox/${this.sport}/` + e + '?geometries=geojson&steps=true&&access_token=' + mapboxgl.accessToken;
        let req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', url, true);
        req.onload = () => {
            let jsonResponse = req.response;
            let distance = jsonResponse.routes[0].distance*0.001; //this converts to km, modify to convert to miles
            let duration = jsonResponse.routes[0].duration/60; //this converts to mins, modify to convert to seconds
            document.getElementById('calculated-line').innerHTML = 'Distance: ' + distance.toFixed(2) + ' km<br>Duration: ' + duration.toFixed(2) + ' minutes'; //modify for appropriate stats
            let coords = jsonResponse.routes[0].geometry;
            addRoute(coords); //add route to map
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
                    "line-color": "#3b9ddd",
                    "line-width": 8,
                    "line-opacity": 0.8
                }
            });
        };
    }

    removeRoute() { //this will remove existing routes on map (source/layer) and clear out stats panel
        if (this.map.getSource('route')) {
            this.map.removeLayer('route');
            this.map.removeSource('route');
            document.getElementById('calculated-line').innerHTML = '';
        } else {
            return;
        }
    }

    render() {
        //GL Draw control is aware of the below actions, so we want to call functions when these events happen
        this.map.on('draw.create', this.updateRoute);
        this.map.on('draw.update', this.updateRoute);
        this.map.on('draw.delete', this.removeRoute);


        return (
            <div className="map-container">
                <div id="map"></div>
                <div className="bottom-panel">
                    {/* <ul className="inline-stats">
                        <li>TYPE</li>
                        <li>DISTANCE</li>
                        <li>ELEV</li>
                    </ul> */}
                    <div id='calculated-line'></div>
                </div>
            </div>   
        )
    }
};

export default RouteBuilder;