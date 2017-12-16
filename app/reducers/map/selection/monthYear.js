
import { SELECT_MONTH_YEAR } from '../../../actions/map-actions'



/* Reducer for selecting a new month and year. */
const select_month_and_year = (state = 'Trip 1', action) => {

  switch (action.type) {

    //When a month year is selected.
    case SELECT_MONTH_YEAR:

      var monthYear = action.monthYear;
      return monthYear

    //Default option.
    default:
      return state
  }

}

export default select_month_and_year
