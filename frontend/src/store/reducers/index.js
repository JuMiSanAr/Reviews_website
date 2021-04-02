import { combineReducers } from "redux";
import { logInReducer } from './loginReducer';
import {  restaurantsReducer } from './restaurantsReducer';
import {searchReducer} from "./searchReducer";
import {usersReducer} from "./usersReducer";
import {categoriesReducer} from "./categoriesReducer";
import {reviewsReducer} from "./reviewsReducer";


const rootReducer = combineReducers({
    logInReducer,
    searchReducer,
    restaurantsReducer,
    categoriesReducer,
    usersReducer,
    reviewsReducer
});

export default rootReducer;