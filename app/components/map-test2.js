import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const RenderMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={13}
        center={{ lat: 36, lng: -121 }}>

    </GoogleMap >
));

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMapLoad(map) {
        this._map = map;
    }

    handleMapClick(event) {
        console.log(event);
    }

    render() {
        return (
            <div>
                <RenderMap/>
            </div>
        )
    }
}

export default Map;
