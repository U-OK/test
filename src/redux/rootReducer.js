import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import mainReducer from "./main/reducer"

export default combineReducers({
  authReducer,
  mainReducer
});