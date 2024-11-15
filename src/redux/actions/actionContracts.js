import { CONTRACTS_REQUEST , CONTRACTS_FAILURE , CONTRACTS_SUCCESS } from "../actions/actionTypes"
import axios from "axios";

// Action Creators
const contractsRequest = () => {
    return {
        type: CONTRACTS_REQUEST
    };
};

 const contractsSuccess = response => {
    return {
        type: CONTRACTS_SUCCESS,
        payload: response
    };
};

 const contractsFailure = error => {
    return {
        type: CONTRACTS_FAILURE,
        payload: error
    };
};

export function getContracts() {
    return function(dispatch) {
        dispatch(contractsRequest())
        axios.defaults.headers["Api-Key-Fms"] = "3055cf36-57ae-4c28-98e6-e7649f5e4ad4";
        axios.get("http://fms.test/api/v1/agreements-implemented")
            .then( response => {
               dispatch(contractsSuccess(response.data))
            }).catch( error => {
               dispatch(contractsFailure(error));
         });
    }
}