import { combineReducers } from "redux";
import AppReducer from "./AppSlice";
export default combineReducers({
  app: AppReducer,
  // product: ProductReducer,
  // user: UserReducer,
});
