import { loginReducer } from "./loginReducer";
import { contractReducer } from './contractReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   login: loginReducer,
   contracts: contractReducer
});

export default rootReducer;