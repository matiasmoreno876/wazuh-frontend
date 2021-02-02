import {
    RULES_REQUEST,
    RULES_ERROR,
    RULES_SUCCESS,
    RULE_BY_ID_REQUEST,
    RULE_BY_ID_ERROR,
    RULE_BY_ID_SUCCESS
} from '../types';

//Cada reducer tiene su propio state
const initialState = {
    rules: [],
    error: null,
    loading: false,
    rule: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RULE_BY_ID_REQUEST:
        case RULES_REQUEST:
            return {
                ...state,
                loading: action.payload
            }
        case RULES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                rules: action.payload
            }
        case RULE_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                rule: action.payload
            }
        case RULE_BY_ID_ERROR:
        case RULES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
