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
export function getAlertsAction(offset, limit) {
    return async (dispatch) => {
        dispatch(getAlerts());
        try {
            const response = await clientAxios.get(`/alerts?offset=${offset}&limit=${limit}`);
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

export function getAlertAction(id) {
    return async (dispatch) => {
        dispatch(getAlert());
        try {
            const response = await clientAxios.get(`/alerts?offset=0&limit=10&id=${id}`);
            dispatch(getAlertSuccess(response.data))
        } catch (error) {
            dispatch(getAlertError())
        }
    }
}

const getAlert = () => ({
    type: ALERT_BY_ID_REQUEST,
    payload: true
})

const getAlertSuccess = alerts => ({
    type: ALERT_BY_ID_SUCCESS,
    payload: alerts.data[0]
})

const getAlertError = () => ({
    type: ALERT_BY_ID_ERROR,
    payload: true
})
