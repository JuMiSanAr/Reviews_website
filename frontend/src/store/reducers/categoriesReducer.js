import {ALL_CATEGORIES} from "../constants";


const initialState = {
    categories: []
};

export const categoriesReducer = (state = initialState, action) => {
    if (action.type === ALL_CATEGORIES) {
        return {
            ...state,
            categories: action.payload,
        }
    }
    return state;
};