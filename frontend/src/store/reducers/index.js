import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import { signUpReducer } from './signupReducer';
import {  homeCardReducer } from './homeCardReducer';
import {searchResReducer} from "./searchResReducer";


const rootReducer = combineReducers({
    logInReducer,
    signUpReducer,
    homeCardReducer,
    searchResReducer,

});

export default rootReducer;