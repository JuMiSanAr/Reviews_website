import { ALL_USERS } from "../constants";



const initialState = {
    users:[]
};

export const usersReducer = (state = initialState, action) => {
    if (action.type === ALL_USERS) {

        return {
            ...state,
            users : action.payload
        }
    }
    return state;
};