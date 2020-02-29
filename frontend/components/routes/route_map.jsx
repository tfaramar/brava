import React from 'react';

class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.route = JSON.parse(this.props.coordinates)
    }
}

export default RouteMap;