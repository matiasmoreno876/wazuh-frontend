import {
    ALERTS_REQUEST,
    ALERTS_ERROR,
    ALERTS_SUCCESS,
    ALERT_BY_ID_REQUEST,
    ALERT_BY_ID_ERROR,
    ALERT_BY_ID_SUCCESS
} from '../types';

//Cada reducer tiene su propio state
const initialState = {
    alerts: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ALERTS_REQUEST:
            return {
                ...state,
                loading: action.payload
            }
        case ALERTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                alerts: action.payload
            }
        case ALERTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;

    }
}
