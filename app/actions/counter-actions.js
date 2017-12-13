
//Increment action type.
export const INCREMENT = 'INCREMENT'

//Decrement action type.
export const DECREMENT = 'DECREMENT'


/* Action Creators */

//Increment a number.
export function addIncrement(state) {

  return { type: INCREMENT, state }

}


//Decrement a number.
export function decrementNumber(state) {

  return { type: DECREMENT, state }

}
