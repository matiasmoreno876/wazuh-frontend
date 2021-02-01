import {combineReducers} from "redux";
import alertsReducer from "./alertsReducer";
import rulesReducer from "./rulesReducer";

export default combineReducers({
    alerts: alertsReducer,
    rules: rulesReducer
})
