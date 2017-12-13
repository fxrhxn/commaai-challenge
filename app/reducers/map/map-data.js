
/*

About - Reducer for the map. Contains all the data needed to load everything on the map.

*/

var test_data = require('../../../server/data/trip-data/2016-07-02--11-56-24.json')


//Starting state variable.
var starting_state = {
  hover_area : {
    lat : 36,
    lon : -121,
  },
  data : test_data.coords,
}

// Map Data reducer.
const mapData = (state = starting_state, action) => {

  return state

}

export default mapData
