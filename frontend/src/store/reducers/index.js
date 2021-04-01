import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import {  restaurantsReducer } from './restaurantsReducer';
import {searchReducer} from "./searchReducer";


const rootReducer = combineReducers({
    logInReducer,
<<<<<<< HEAD
    signUpReducer,
    homeCardReducer,
    searchResReducer,

=======
    restaurantsReducer,
    searchReducer,
>>>>>>> dev
});

export default rootReducer;