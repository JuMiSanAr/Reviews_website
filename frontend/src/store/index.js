import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import {LOGIN} from "./constants";

const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, enhancer);

// Making sure user is logged in
const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: LOGIN, payload: token });
}