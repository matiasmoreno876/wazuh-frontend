import {combineReducers} from "redux";
import alertsReducer from "./alertsReducer";
import rulesReducer from "./rulesReducer";
import agentsReducer from "./agentsReducer";

export default combineReducers({
    alerts: alertsReducer,
    rules: rulesReducer,
    agents: agentsReducer
})
