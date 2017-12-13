import React, { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import {February2017_1} from "../../server/data/cleaned-data/February2017"


//Import the actions from the
import { addIncrement, decrementNumber } from '../actions/counter-actions'



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

    {props.data.map((dta, i) => {

      if(i == 0){


        return(

      <Marker key={i} position={{ lat: props.data[0].lat, lng: props.data[0].lng}} draggable={true}/>

        )


      }else{

        var previous_lat = props.data[i-1].lat
        var previous_lng = props.data[i-1].lng

        var connected_path = [
          {lat : previous_lat, lng : previous_lng},
          {lat : dta.lat, lng : dta.lng}
        ]

        return(

    //  <Marker key={i} position={{ lat: dta.lat, lng: dta.lng}}>

      <Polyline
            path={connected_path}
            visible={true}
      />
    //  </Marker>
        )



      }


    })}

    </GoogleMap>
  ))



//Export the map component.
class MyFancyComponent extends Component {

  componentWillMount(){
    console.log(this.props.mapData.data)
  }
  render() {
    return(
      <MyMapComponent mapData={this.props.mapData} data={this.props.mapData.data}/>
    )

  }
}


function mapStateToProps(state) {
  return {
    mapData : state.mapData,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyFancyComponent)
