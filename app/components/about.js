import React, { Component } from 'react'
import GoogleMap from 'google-map-react';
import mapTest from './map-test';

//Import the test map.
import Place from './map/place'

export default class About extends Component {

    render() {
        return(
            <div>
                <mapTest></mapTest>
            </div>
        )
    }

}
