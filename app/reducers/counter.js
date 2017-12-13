
import { INCREMENT, DECREMENT } from '../actions/counter-actions'


//Default counter reducer.
const counter = (state = 0, action) => {

  //Switch statement for the different action types.
  switch (action.type) {

    case INCREMENT:
      return state += 1


    case DECREMENT:
      return state -= 1


    default:
      return state
  }

}

export default counter
