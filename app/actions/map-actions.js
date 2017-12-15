

/* Select Month Action Type */
export const SELECT_MONTH_YEAR = 'SELECT_MONTH_YEAR'

/* Select Day Action Type */
export const SELECT_DAY_SAME_MONTH = 'SELECT_DAY_SAME_MONTH'
export const SELECT_DAY_NEW_MONTH = 'SELECT_DAY_NEW_MONTH'

/* Marker Action Types */
export const CHANGE_COORDINATES = 'CHANGE_COORDINATES'

/* Update Map Action Types */
export const UPDATE_MAP = 'UPDATE_MAP'

//Action to select month and year.
export function selectMonthYear(monthYear){
  return {
    type : SELECT_MONTH_YEAR,
    monthYear : monthYear,
  }
}

// Action to select a day with the same month.
export function selectDay_sameMonth(day){
  return {
    type: SELECT_DAY_SAME_MONTH,
    day : day,
  }
}


//Action to select a day with a new month.
export function selectDay_newMonth(day){
  return{
    type : SELECT_DAY_NEW_MONTH,
    day : day,
  }
}

//Action to update the map.
export function updateMap(data){
  return{
    type : UPDATE_MAP,
    data : data,
  }
}

export function updateMarker(coords){
  return{
    type : CHANGE_COORDINATES,
    coords : coords
  }
}
