import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import {  restaurantsReducer } from './restaurantsReducer';
import {searchReducer} from "./searchReducer";


const rootReducer = combineReducers({
    logInReducer,
    searchReducer,
    restaurantsReducer,

});

export default rootReducer;