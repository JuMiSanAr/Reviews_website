import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import {  restaurantsReducer } from './restaurantsReducer';
import {searchReducer} from "./searchReducer";
import {usersReducer} from "./usersReducer";
import {categoriesReducer} from "./categoriesReducer";


const rootReducer = combineReducers({
    logInReducer,
    searchReducer,
    restaurantsReducer,
    categoriesReducer,
    usersReducer
});

export default rootReducer;