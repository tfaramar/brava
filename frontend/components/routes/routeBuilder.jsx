import React from 'react';

class RouteBuilder extends React.Component {
    constructor(props) {
        super(props)

        //this component was built with reference to the following article: https://blog.mapbox.com/map-hacks-directions-api-draw-tools-7557134622e9

        mapboxgl.accessToken = 'pk.eyJ1IjoidGZhcmFtYXIiLCJhIjoiY2s1ZDBidW1hMDB2MjNtbzRobmwydzI3cCJ9.d9XMlETjhYMJAplujHt8Pg';

        this.map = {};
        this.draw = {};
        
    }

    componentDidMount() {
         //initialize map
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-122.46, 37.7989], //starting centerpoint (SF)
            zoom: 11, //initial zoom
            minZoom: 9 //limit zoom
        });

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

    render() {
        return (
            <div className="map-container">
                <div id="map"></div>
                <div className="bottom-panel">
                    <ul className="inline-stats">
                        <li>TYPE</li>
                        <li>DISTANCE</li>
                        <li>ELEV</li>
                    </ul>
                </div>
            </div>   
        )
    }
};

export default RouteBuilder;