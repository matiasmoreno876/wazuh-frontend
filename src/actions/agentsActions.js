import {
    AGENTS_REQUEST,
    AGENTS_ERROR,
    AGENTS_SUCCESS,
    AGENT_BY_ID_REQUEST,
    AGENT_BY_ID_ERROR,
    AGENT_BY_ID_SUCCESS
} from '../types';

import clientAxios from "../config/axios";

//
export function getAgentsAction(offset, limit) {
    return async (dispatch) => {
        dispatch(getAgents());
        try {
            const response = await clientAxios.get(`/agents?offset=${offset}&limit=${limit}`);
            dispatch(getAgentsSuccess(response.data))
        } catch (error) {
            dispatch(getAgentsError())
        }
    }
}

const getAgents = () => ({
    type: AGENTS_REQUEST,
    payload: true
})

const getAgentsSuccess = agents => ({
    type: AGENTS_SUCCESS,
    payload: agents
})

const getAgentsError = () => ({
    type: AGENTS_ERROR,
    payload: true
})

export function getAgentAction(id) {
    return async (dispatch) => {
        dispatch(getAgent());
        try {
            const response = await clientAxios.get(`/agents/${id}`);
            dispatch(getAgentSuccess(response.data))
        } catch (error) {
            dispatch(getAgentError())
        }
    }
}

const getAgent = () => ({
    type: AGENT_BY_ID_REQUEST,
    payload: true
})

const getAgentSuccess = agent => ({
    type: AGENT_BY_ID_SUCCESS,
    payload: agent
})

const getAgentError = () => ({
    type: AGENT_BY_ID_ERROR,
    payload: true
})
