
/*

About - Reducer for the map. Contains all the data needed to load everything on the map.

*/

var test_data = require('../../../../server/data/trip-data/2016-07-02--11-56-24.json')


//Starting state variable.
var starting_state = {
  trip_name : 'Trip 1',
  trip_data : test_data
};


// Map Data reducer.
const tripData = (state = starting_state, action) => {

  return state

}

export default tripData
