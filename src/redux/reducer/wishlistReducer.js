import * as types from "../actions/authActionTypes"
const INITIAL_STATE = {
 recipes: []

};
export default function wishlistReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_WISHLIST:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        recipes: removeItem(state.recipes, action)
      };


    default:
      return state;
  }
}

const removeItem = (array, action) => {
  return array.filter((item, index) => item.id !== action.payload.id);
};
