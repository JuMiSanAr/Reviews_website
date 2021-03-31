import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import { signUpReducer } from './signupReducer';

const rootReducer = combineReducers({
    logInReducer,
    signUpReducer,
});

export default rootReducer;