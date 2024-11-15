
import { CONTRACTS_REQUEST , CONTRACTS_FAILURE , CONTRACTS_SUCCESS } from "../actions/actionTypes"

const initialState = {
    loading: false,
    contracts: [],
    error: ''
 }

 export const contractReducer = ( state = initialState , action) => {
    switch (action.type) {
        case CONTRACTS_REQUEST: return {
             ...state,
             loading: true
        }
        case CONTRACTS_SUCCESS: return {
             loading: false,
             contracts: action.payload,
             error: ''
        }
        case CONTRACTS_FAILURE: return {
            loading: false,
            contracts: [],
            error: action.payload
        }
        default: return state;
    }
}