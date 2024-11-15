import api from "../../axios/instance";
import { LOGIN_REQUEST , LOGIN_FAILURE , LOGIN_SUCCESS } from "../actions/actionTypes"


// Action Creators
const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

 const loginSuccess = response => {
    return {
        type: LOGIN_SUCCESS,
        payload: response
    };
};

 const loginFailure = error => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    };
};

export function login(username, pass , navigate) {
    return function(dispatch) {
        dispatch(loginRequest());
        
        api.post("/api/login", { name: username, password: pass })
            .then(response => {
                dispatch(loginSuccess(response.data));
                if(response.data.statusCode === 200){
                    navigate("/home");
                }
            })
            .catch(error => {
                dispatch(loginFailure(error.message));
            });
    };
}
