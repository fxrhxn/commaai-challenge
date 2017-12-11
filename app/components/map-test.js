import React, { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

//import {February2017_1} from "../../server/data/cleaned-data/February2017"


//Map component.
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDK3r6_w9ix6QOqU-vIHIpsvVQ-IEkjvGU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: window.innerHeight }} />,
    containerElement: <div style={{ height: window.innerHeight }} />,
    mapElement: <div style={{ height: window.innerHeight }} />,
  }),
  withScriptjs,
  withGoogleMap)((props)=>(
    <GoogleMap
      defaultZoom={8}
      options={{
        zoomControl : true,
        mapTypeControl : false,
        fullscreenControl : false,
      }}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
    </GoogleMap>
  ))


//Export the map component.
export default class MyFancyComponent extends Component {

  render() {
    return(
      <MyMapComponent/>
    )

  }
}
