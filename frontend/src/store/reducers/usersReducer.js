import { ALL_USERS, GET_USER_INFO } from "../constants";


const initialState = {
    users: [],
    loggedInUser: {}
};

export const usersReducer = (state = initialState, action) => {
    if (action.type === ALL_USERS) {
        return {
            ...state,
            users : action.payload
        }
    }
    else if (action.type === GET_USER_INFO) {
        return {
            ...state,
            loggedInUser : action.payload
        }
    }
    return state;
};