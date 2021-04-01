import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import { signUpReducer } from './signupReducer';
import {  homeCardReducer } from './homeCardReducer';

const rootReducer = combineReducers({
    logInReducer,
    signUpReducer,
    homeCardReducer,
});

export default rootReducer;