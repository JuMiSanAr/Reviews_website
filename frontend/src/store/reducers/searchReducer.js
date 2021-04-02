import {SEARCH_RESTAURANTS, SEARCH_REVIEWS, SEARCH_USERS} from "../constants";


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
    else if (action.type === SEARCH_REVIEWS) {
        return {
            ...state,
            reviews: action.payload,
        }
    }
    else if (action.type === SEARCH_USERS) {
        return {
            ...state,
            users: action.payload,
        }
    }
    return state;
};