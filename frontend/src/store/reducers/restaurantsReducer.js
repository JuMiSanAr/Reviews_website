import {NEW_RESTAURANT, ALL_RESTAURANTS, FILTER_RESTAURANT_DATA, HOME_CARD, PASS_RESTAURANT_DATA} from "../constants";



const initialState = {
    bestFour: [],
    all_restaurants: [],
    filtered_restaurant: []
};

export const restaurantsReducer = (state = initialState, action) => {
    if (action.type === HOME_CARD) {
        return {
            ...state,
            bestFour: action.payload,
        }
    }
    else if (action.type === ALL_RESTAURANTS) {
        return {
            ...state,
            all_restaurants: action.payload,
        }
    }
    else if (action.type === PASS_RESTAURANT_DATA) {
        return {
            ...state,
            restaurant_data: action.payload,
        }
    } else if (action.type === FILTER_RESTAURANT_DATA) {
        return {
            ...state,
           filtered_restaurant: action.payload
        }
    }
    else{
        return state;
    }
};

