/**
 * entity-actions.js
 */

export const REFRESH = 'REFRESH'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'
export const INCREMENT = 'INCREMENT'

//Change the Month and Year on the map - type
export const CHANGE_MONTH_YEAR = 'CHANGE_MONTH_YEAR'

//Change the day - type
export const CHANGE_DAY = 'CHANGE_DAY'

//Clicked a dot on the map.
export const CLICKED_DOT = 'CLICKED_DOT'


const wrap_action = (type, payload) => {
  return { type, payload }
}

export const refresh_entities = entity => {
  return dispatch => {
    // do some request here
    fetch(`path/${entity}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        dispatch(wrap_action(entity, json))
      })
  }
}
