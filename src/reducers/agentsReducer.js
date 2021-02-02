import {
    AGENTS_REQUEST,
    AGENTS_ERROR,
    AGENTS_SUCCESS,
    AGENT_BY_ID_REQUEST,
    AGENT_BY_ID_ERROR,
    AGENT_BY_ID_SUCCESS
} from '../types';

//Cada reducer tiene su propio state
const initialState = {
    agents: [],
    error: null,
    loading: false,
    agent: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AGENT_BY_ID_REQUEST:
        case AGENTS_REQUEST:
            return {
                ...state,
                loading: action.payload
            }
        case AGENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                agents: action.payload
            }
        case AGENT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                agent: action.payload
            }
        case AGENT_BY_ID_ERROR:
        case AGENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;

    }
}
