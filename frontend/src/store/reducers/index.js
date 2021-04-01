import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import {  restaurantsReducer } from './restaurantsReducer';
import {searchReducer} from "./searchReducer";
import {categoriesReducer} from "./categoriesReducer";

const rootReducer = combineReducers({
    logInReducer,
    restaurantsReducer,
    searchReducer,
    categoriesReducer
});

export default rootReducer;