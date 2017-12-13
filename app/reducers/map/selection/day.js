import { SELECT_DAY_SAME_MONTH, SELECT_DAY_NEW_MONTH } from '../../../actions/map-actions'


/* Reducer to select a day. */
const daySelect = (state = '1', action) => {

  switch (action.type) {

    //If same month is selected.
    case SELECT_DAY_SAME_MONTH:
      return action.day

    //New month is selected; start at the first date of that month.
    case SELECT_DAY_NEW_MONTH:
      return '1'

    default:
      return '1'
  }


}

export default daySelect
