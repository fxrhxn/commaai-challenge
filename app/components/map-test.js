import React, { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

//Map component.
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDK3r6_w9ix6QOqU-vIHIpsvVQ-IEkjvGU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap)((props)=>(
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {true && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={() => {
        console.log("HA")
      }} />} </GoogleMap>
  ))


//Export the map component. 
export default class MyFancyComponent extends Component {

  render() {
    return(
      <MyMapComponent/>
    )

  }
}
