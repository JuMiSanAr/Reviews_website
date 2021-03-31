import { LOGIN } from "../constants";



const initialState = {
    token: null,
    authenticated: null
};

export const logInReducer = (state = initialState, action) => {
    if (action.type === LOGIN) {

        return {
            ...state,
            token: action.payload.token,
            authenticated: true
        }
    }
    return state;
};