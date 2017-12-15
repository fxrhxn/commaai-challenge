import { SELECT_DAY_SAME_MONTH, SELECT_DAY_NEW_MONTH, CHANGE_COORDINATES } from '../../../actions/map-actions'


/* Reducer to select a day. */
const marker_coordinates = (state = {} , action) => {

  switch (action.type) {

    //If the coordinates are changed.
    case CHANGE_COORDINATES:
      return action.coords

    default:
      return state
  }


}

export default marker_coordinates
