import { LOGIN } from "../constants";



const initialState = {
    token: null,
    user: null,
    
    authenticated: null
};

export const logInReducer = (state = initialState, action) => {
    if (action.type === LOGIN) {
        console.log('hello from the login reducer', action.payload);
        return {
            ...state,
            token: action.payload.token,
            // user: action.payload.user,
            authenticated: true
        }
    }
    return state;
};