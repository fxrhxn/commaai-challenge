import React from 'react'
import ReactDOM from 'react-dom'
import GoogleApiComponent from '../customGoogle/GoogleApiComponent'


class Map extends React.Component {

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
   if (prevProps.google !== this.props.google) {

     this.loadMap();
   }
 }

 loadMap() {
   if (this.props && this.props.google) {
    // google is available
    const {google} = this.props;
    const maps = google.maps;
    const mapRef = this.refs.map;
    const node = ReactDOM.findDOMNode(mapRef);

    let zoom = 14;
     let lat = 37.774929;
     let lng = -122.419416;
     const center = new maps.LatLng(lat, lng);
     const mapConfig = Object.assign({}, {
       center: center,
       zoom: zoom
     })
     this.map = new maps.Map(node, mapConfig);

  }else{
    console.log('No map')
  }
 }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}

class Container extends React.Component {

  componentWillMount(){
    console.log(this.props.google)
  }
  render() {
    const style = {
      width: '300px',
      height: '300px'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}


export default GoogleApiComponent({
  apiKey: 'AIzaSyDK3r6_w9ix6QOqU-vIHIpsvVQ-IEkjvGU'
})(Container)
