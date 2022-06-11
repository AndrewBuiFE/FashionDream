import { combineReducers } from "redux";
import CartReducer from "../../modules/screens/CartScreen/CartSlice";
import AppReducer from "./AppSlice";
export default combineReducers({
  app: AppReducer,
  // user: UserReducer,
  cart: CartReducer,
});
