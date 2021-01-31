import {combineReducers} from "redux";
import alertsReducer from "./alertsReducer";

export default combineReducers({
    alerts: alertsReducer
})
