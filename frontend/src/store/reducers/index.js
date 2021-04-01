import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import {  restaurantsReducer } from './restaurantsReducer';
import {searchReducer} from "./searchReducer";
import {usersReducer} from "./usersReducer";


const rootReducer = combineReducers({
    logInReducer,
    searchReducer,
    restaurantsReducer,
    UsersReducer: usersReducer,

});

export default rootReducer;