

var monthAndYears = ['July 2016', 'January 2017', 'February 2017', 'March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017', 'September 2017', 'October 2017']


var main_data = require('../../../server/data/maindata').all_data

var starting_state = main_data

const default_data = (state = starting_state, action) => {
  return state
}

export default default_data
