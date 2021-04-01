import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import {  homeCardReducer } from './homeCardReducer';

const rootReducer = combineReducers({
    logInReducer,
    homeCardReducer,
});

export default rootReducer;