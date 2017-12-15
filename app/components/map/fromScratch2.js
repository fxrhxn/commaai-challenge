import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import {February2017_1} from "../../server/data/cleaned-data/February2017"



import test_data from '../../../server/data/trip-data/2016-07-02--11-56-24.json'


var testingCoords = [
  {
    "lat": -36.8656740244478,
    "speed": 1,
    "lng": 174.72489793784916,
    "dist": 0,
    "index": 0
  },
  {
    "lat": -36.86582762282342,
    "speed": 2,
    "lng": 174.72503422759473,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.865929337218404,
    "speed": 3,
    "lng": 174.72529197111726,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.86608469579369,
    "speed": 4,
    "lng": 174.72548073157668,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.866103052161634,
    "speed": 5,
    "lng": 174.72563814371824,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.8661513319239,
    "speed": 6,
    "lng": 174.7257921192795,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.86634725891054,
    "speed": 7,
    "lng": 174.72605866380036,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.86636704020202,
    "speed": 8,
    "lng": 174.72634574398398,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.86640760861337,
    "speed": 9,
    "lng": 174.72647675313056,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.866334015503526,
    "speed": 10,
    "lng": 174.7267128713429,
    "dist": 1.1740257992762348,
    "index": 0
  },
  {
    "lat": -36.86633242294192,
    "speed": 11,
    "lng": 174.72689299844205,
    "dist": 1.1740257992762348,
    "index": 0
  },

]





class MapTest extends Component {
  constructor(props){
    super(props)

    this.state = {
      speed : 0,
    }

  }

  componentDidMount(){
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    //window.initMap = this.initMap;

    var padded_points = new Array(); //To store the padded array of points

        this.map = new google.maps.Map(this.refs.map, {
             center: new google.maps.LatLng(test_data.coords[0].lat, test_data.coords[0].lng),
             zoom: 6,
             mapTypeId: google.maps.MapTypeId.ROADMAP
         });

         var latLng = new google.maps.LatLng(test_data.coords[0].lat, test_data.coords[0].lng);

         var marker = new google.maps.Marker({
             position: latLng,
             map: this.map,
             draggable: true
         });



         google.maps.event.addDomListener(marker, 'dragend', function(e) {
    marker.setPosition(find_closest_point_on_path(e.latLng,padded_points));

          //console.log(e.latLng.lat())
          //console.log(e.latLng.lng())



    });

      google.maps.event.addDomListener(marker, 'drag', (e) => {
          marker.setPosition(find_closest_point_on_path(e.latLng,padded_points));


        var closest_Lat = findCloseLat(e.latLng.lat())


        var ui_data = _.find(test_data.coords, { lat : closest_Lat});

        this.setState({
          speed : ui_data.speed
        })
//        console.log(ui_data.speed)
        // var closest = counts.reduce(function(prev, curr) {
        //   return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        // });
        //console.log(e.latLng.lng())
      });


      //Converted data to usable map array.
      var converted_data = []

      $.each(test_data.coords, function(key, cords){

        converted_data.push(new google.maps.LatLng(cords.lat, cords.lng))

      })


      //Pad the points array
      $.each(converted_data, function(key, pt) {
          var current_point = pt;
          var next_point = converted_data[key + 1];

          //Check if we're on the last point
          if (typeof next_point !== 'undefined') {

              //Get a 10th of the difference in latitude
              var lat_incr = (next_point.lat() - current_point.lat()) / 10;

              //Get a 10th of the difference in longitude
              var lng_incr = (next_point.lng() - current_point.lng()) / 10;

              //Add the current point to the new padded_points array
              padded_points.push(current_point);

              //Now add 10 points at lat_incr & lng_incr intervals between current and next points
              //We add this to the new padded_points array
              for (var i = 1; i <= 10; i++) {
                  var new_pt = new google.maps.LatLng(current_point.lat() + (i * lat_incr), current_point.lng() + (i * lng_incr));
                  padded_points.push(new_pt);
              }
          }
      });

      var line = new google.maps.Polyline({
    path: padded_points,
    strokeColor: '#ff0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
});

line.setMap(this.map);


    // Asynchronously load the Google Maps script, passing in the callback reference
    //loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDK3r6_w9ix6QOqU-vIHIpsvVQ-IEkjvGU&callback=initMap')

  }

  initMap(){


    this.map = new google.maps.Map(this.refs.map, {
         center: new google.maps.LatLng(-36.86501268451408, 174.723858833313),
         zoom: 16,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     });

     var latLng = new google.maps.LatLng(-36.8656740244478, 174.72489793784916);
     var marker = new google.maps.Marker({
         position: latLng,
         map: map,
         draggable: true
     });

  }

  render(){
    return(
      <div>
          <div ref="map" style={{height : '500px', width : '500px'}}></div>
          <h1>Speed: {this.state.speed}</h1>
      </div>
    )
  }

}

function find_closest_point_on_path(drop_pt,path_pts){
    var distances = new Array();//Stores the distances of each pt on the path from the marker point
    var distance_keys = new Array();//Stores the key of point on the path that corresponds to a distance

    //For each point on the path
    $.each(path_pts,function(key, path_pt){
        //Find the distance in a linear crows-flight line between the marker point and the current path point
        var R = 6371; // km
        var dLat = (path_pt.lat()-drop_pt.lat()).toRad();
        var dLon = (path_pt.lng()-drop_pt.lng()).toRad();
        var lat1 = drop_pt.lat().toRad();
        var lat2 = path_pt.lat().toRad();

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        //Store the distances and the key of the pt that matches that distance
        distances[key] = d;
        distance_keys[d] = key;

    });
    //Return the latLng obj of the second closest point to the markers drag origin. If this point doesn't exist snap it to the actual closest point as this should always exist
    return (typeof path_pts[distance_keys[_.min(distances)]+1] === 'undefined')?path_pts[distance_keys[_.min(distances)]]:path_pts[distance_keys[_.min(distances)]+1];
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}


//Find the close lat.
function findCloseLat(lat){

  var latArr = []

  test_data.coords.map(function(cords, i){

    latArr.push(cords.lat)

  })

  var closest = latArr.reduce(function(prev, curr) {
  return (Math.abs(curr - lat) < Math.abs(prev - lat) ? curr : prev);
  });

  return closest


}


function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}



function mapStateToProps(state) {
  return {
    tripData : state.tripData,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapTest)
