import { SEARCH } from "../constants";



const initialState = {
   search: [],
};

export const  searchResReducer = (state = initialState, action) => {
    if (action.type === SEARCH) {
        return {
            ...state,
            search: action.payload,
        }
    }
    return state;

};