import { combineReducers } from "redux";
import friend from "./friendReducer";
import post from "./postReducer";
export default combineReducers({
  friend,
  post
});
