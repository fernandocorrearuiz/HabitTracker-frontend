import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import habits from "./habits/reducer";

export default combineReducers({
  appState,
  user,
  habits,
});
