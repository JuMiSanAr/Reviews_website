import {GET_ALL_REVIEWS} from "../constants";


const initialState = {
    all_reviews: []
};

export const reviewsReducer = (state = initialState, action) => {
    if (action.type === GET_ALL_REVIEWS) {
        return {
            ...state,
            all_reviews: action.payload
        }
    }
    return state;
};