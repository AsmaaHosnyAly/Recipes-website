import * as types from '../actions/authActionTypes'
const INITIAL_STATE = {
  recipes: [],
}
export default function wishlistReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_WISHLIST:
      return {
        recipes: CheckItem(state.recipes, action),
      }
    case types.REMOVE_ITEM:
      return {
        recipes: removeItem(state.recipes, action),
      }

    default:
      return state
  }
}
const CheckItem = (array, action) => {
  let list = array.filter((data) => data.id === action.payload.id)
  if (list.length !== 0) return array
  else return [...array, action.payload]
}

const removeItem = (array, action) => {
  return array.filter((item, index) => item.id !== action.payload.id)
}
