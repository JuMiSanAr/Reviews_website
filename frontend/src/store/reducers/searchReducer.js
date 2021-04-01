import {SEARCH_RESTAURANTS} from "../constants";


const initialState = {
    restaurants: [],
    reviews: [],
    users: []
};

export const  searchReducer = (state = initialState, action) => {
    if (action.type === SEARCH_RESTAURANTS) {
        return {
            ...state,
            restaurants: action.payload,
        }
    }
    return state;
};