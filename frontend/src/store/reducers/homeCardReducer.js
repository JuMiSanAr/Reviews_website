import { HOME_CARD } from "../constants";



const initialState = {
   restaurant: [],
};

export const  homeCardReducer = (state = initialState, action) => {
    if (action.type === HOME_CARD) {
        return {
            ...state,
            restaurant: action.payload,
        }
    }
    return state;

};