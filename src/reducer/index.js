import changeTheNumber from "./upDown";
import { combineReducers } from "redux";

// reducer principle one reducer for application
const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;
