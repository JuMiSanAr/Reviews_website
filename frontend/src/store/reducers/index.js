import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import { signUpReducer } from './signupReducer';
import {  homeCardReducer } from './homeCardReducer';
import {newReviewReducer} from "./newReviewReducer";

const rootReducer = combineReducers({
    logInReducer,
    signUpReducer,
    homeCardReducer,
    newReviewReducer,
});

export default rootReducer;