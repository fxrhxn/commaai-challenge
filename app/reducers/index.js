import { combineReducers } from 'redux'
import entities_reducer from './entities/entities-reducer'
import counter_reducer from './counter'
import speed_data from './speed'
import { routerReducer } from 'react-router-redux'

import mapData_default from './map/default_data';
import select_monthYear from './map/selection/monthYear'
import select_day from './map/selection/day'
import mapData from './map/map-data';

import marker_coordinates from './map/marker/coordinates'

import tripData from './map/selection/trip_data'

const rootReducer = combineReducers({
  entities: entities_reducer,
  routing: routerReducer,
  counter : counter_reducer,
  mapData_default : mapData_default,
  selectMonthYear : select_monthYear,
  selectDay : select_day,
  mapData : mapData,
  marker_coordinates : marker_coordinates,
  tripData : tripData,
  speedData : speed_data,
})

export default rootReducer
