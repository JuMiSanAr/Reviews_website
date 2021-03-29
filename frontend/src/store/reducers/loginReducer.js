import { LOGIN, LOGOUT } from "../constants";



const initialState = {
    token: null,
    user: null,
    
    authenticated: null
};

export const logInOrOutReducer = (state = initialState, action) => {
    if (action.type === LOGIN) {
        console.log('hello from the login reducer', action.payload);
        return {
            ...state,
            token: action.payload.token,
            // user: action.payload.user,
            authenticated: true
        }
    } else if (action.type === LOGOUT) {
        console.log('byebye from the logout reducer', action);
        localStorage.clear();
        return initialState;
    }
    return state;
};