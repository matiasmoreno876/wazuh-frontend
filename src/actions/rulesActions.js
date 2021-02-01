import {
    RULES_REQUEST,
    RULES_ERROR,
    RULES_SUCCESS,
    RULE_BY_ID_REQUEST,
    RULE_BY_ID_ERROR,
    RULE_BY_ID_SUCCESS
} from '../types';

import clientAxios from "../config/axios";

//
export function getRulesAction() {
    return async (dispatch) => {
        dispatch(getRules());
        try {
            const response = await clientAxios.get('/rules?offset=0&limit=10');
            dispatch(getRulesSuccess(response.data))
        } catch (error) {
            dispatch(getRulesError())
        }
    }
}

const getRules = () => ({
    type: RULES_REQUEST,
    payload: true
})

const getRulesSuccess = rules => ({
    type: RULES_SUCCESS,
    payload: rules
})

const getRulesError = () => ({
    type: RULES_ERROR,
    payload: true
})

export function getRuleAction(id) {
    return async (dispatch) => {
        dispatch(getRule());
        try {
            const response = await clientAxios.get(`/rules/${id}`);
            dispatch(getRuleSuccess(response.data))
        } catch (error) {
            dispatch(getRuleError())
        }
    }
}

const getRule= () => ({
    type: RULE_BY_ID_REQUEST,
    payload: true
})

const getRuleSuccess = rule => ({
    type: RULE_BY_ID_SUCCESS,
    payload: rule
})

const getRuleError = () => ({
    type: RULE_BY_ID_ERROR,
    payload: true
})
