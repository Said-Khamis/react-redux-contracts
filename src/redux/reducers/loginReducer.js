import { LOGIN_REQUEST , LOGIN_FAILURE , LOGIN_SUCCESS } from "../actions/actionTypes"

const initialState = {
   loading: false,
   payload: '',
   error: ''
}

export const loginReducer = ( state = initialState , action) => {
    switch (action.type) {
        case LOGIN_REQUEST: return {
             ...state,
             loading: true
        }
        case LOGIN_SUCCESS: return {
             loading: false,
             payload: action.payload,
             error: ''
        }
        case LOGIN_FAILURE: return {
            loading: false,
            payload: '',
            error: action.payload
        }
        default: return state;
    }
}

