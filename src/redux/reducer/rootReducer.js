import { combineReducers } from "redux";
import userReducer from "./reducer";
import wishlistReducer from './wishlistReducer'

// I made it for Combine

const rootReducer = combineReducers({
  user: userReducer,
  wishlist:wishlistReducer,
});

export default rootReducer;
