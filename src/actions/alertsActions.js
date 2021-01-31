import {
    ALERTS_REQUEST,
    ALERTS_ERROR,
    ALERTS_SUCCESS,
    ALERT_BY_ID_REQUEST,
    ALERT_BY_ID_ERROR,
    ALERT_BY_ID_SUCCESS
} from '../types';

import clientAxios from "../config/axios";

//
export function getAlertsAction() {
    return async (dispatch) => {
        dispatch(getAlerts());
        try {
            const response = await clientAxios.get('/alerts?offset=0&limit=15');
            dispatch(getAlertsSuccess(response.data))
        } catch (error) {
            dispatch(getAlertsError())
        }
    }
}

const getAlerts = () => ({
    type: ALERTS_REQUEST,
    payload: true
})

const getAlertsSuccess = alerts => ({
    type: ALERTS_SUCCESS,
    payload: alerts
})

const getAlertsError = () => ({
    type: ALERTS_ERROR,
    payload: true
})
