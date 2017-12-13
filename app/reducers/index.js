import { combineReducers } from 'redux'
import entities_reducer from './entities/entities-reducer'
import counter_reducer from './counter'
import { routerReducer } from 'react-router-redux'

import mapData_default from './map/default_data';
import select_monthYear from './map/selection/monthYear'
import select_day from './map/selection/day'
import mapData from './map/map-data';

const rootReducer = combineReducers({
  entities: entities_reducer,
  routing: routerReducer,
  counter : counter_reducer,
  mapData_default : mapData_default,
  selectMonthYear : select_monthYear,
  selectDay : select_day,
  mapData : mapData,
})

export default rootReducer
