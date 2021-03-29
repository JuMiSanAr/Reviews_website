import { combineReducers } from "redux";
import { logInOrOutReducer } from './loginReducer';
import { signUpReducer } from './signupReducer';

const rootReducer = combineReducers({
    logInOrOutReducer,
    signUpReducer
});

export default rootReducer;