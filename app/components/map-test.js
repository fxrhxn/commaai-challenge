import React, { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import {February2017_1} from "../../server/data/cleaned-data/February2017"


//Import the actions from the
import { updateMarker } from '../actions/map-actions'


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
      defaultCenter={{ lat: props.mapData.hover_area.lat, lng: props.mapData.hover_area.lon }}
    >


    <Marker
    position={{ lat: props.mapData.hover_area.lat, lng: props.mapData.hover_area.lon }}
    onDragEnd={(e) => {

      //Set position back to starting.
    //  console.log(e.latLng)


    //console.log(this.refs.myMarker.getPosition())



      var test_lat = props.mapData.hover_area.lat
      var test_lon = props.mapData.hover_area.lon


    //  this.refs.myMarker.setPosition(new google.maps.LatLng(test_lat, test_lon))
    console.log(this.refs)
      //console.log(this.refs.myMarker)


    }}
    onDrag={(e) => {



    }}
    draggable={true}
    />

    {props.children}

    </GoogleMap>
  ))



//Export the map component.
class MyFancyComponent extends Component {



  constructor(props){
    super(props)


    this.state = {
      starting_lat : 0,
      starting_lon : 0,
    }

  }

  componentWillMount(){

    this.setState({
      lat : this.props.mapData.data[0].lat,
      lon : this.props.mapData.data[0].lng,
    })

  }


  render() {
    return(
      <MyMapComponent
      mapData={this.props.mapData}
      data={this.props.mapData.data}
      markerLocation={this.props.marker_coordinates}
      updateMarker={this.props.updateMarker}
      >



      {this.props.mapData.data.map((dta, i) => {

        if(i == 0){

          return


        }else{

          var previous_lat = this.props.mapData.data[i-1].lat
          var previous_lng = this.props.mapData.data[i-1].lng

          var connected_path = [
            {lat : previous_lat, lng : previous_lng},
            {lat : dta.lat, lng : dta.lng}
          ]

          return(

      //  <Marker key={i} position={{ lat: dta.lat, lng: dta.lng}}>

        <Polyline
              key={i}
              path={connected_path}
              visible={true}
        />
      //  </Marker>
          )



        }


      })}

      </MyMapComponent>
    )

  }
}


function mapStateToProps(state) {
  return {
    mapData : state.mapData,
    marker_coordinates : state.marker_coordinates,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateMarker : updateMarker,
  }, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyFancyComponent)
