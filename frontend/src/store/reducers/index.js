import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import {  homeCardReducer } from './homeCardReducer';
import {searchResReducer} from "./searchResReducer";

const rootReducer = combineReducers({
    logInReducer,
    homeCardReducer,
    searchResReducer,
});

export default rootReducer;