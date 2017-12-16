
/*

About - Reducer for the map. Contains all the data needed to load everything on the map.

*/

var test_data = require('../../../server/data/trip-data/2016-07-02--11-56-24.json')
var uuid = require('uuid')
var axios = require('axios')

import { TRIP_SELECTED } from '../../actions/map-actions'

//Starting state variable.
var starting_state = {
  hover_area : {
    lat : 36,
    lon : -121,
  },
  data : test_data.coords,
}

// Map Data reducer.
const mapData = (state = test_data, action) => {


  if(action.type == TRIP_SELECTED){

      var route_location = '../../../server/data/trip-data/'
      var triplocation = action.tripdata.data_route

      var full_location = route_location + triplocation;

      return { uuid : uuid(), location : triplocation}

  }else{
    return state
  }



}

export default mapData
