import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import habits from "./habits/reducer";
import weights from "./weights/reducer";
import goals from "./goals/reducer";
import latestWeight from "./latestWeight/reducer";

export default combineReducers({
  appState,
  user,
  habits,
  weights,
  goals,
  latestWeight,
});
