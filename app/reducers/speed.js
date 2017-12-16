
import { SPEED_CHANGED } from '../actions/map-actions'



// Speed Data reducer.
const speedData = (state = 0, action) => {


  if(action.type == SPEED_CHANGED){

//      console.log(action)

      return action.speed

  }else{
    return state
  }


}

export default speedData
