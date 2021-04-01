import { ALL_RESTAURANTS, HOME_CARD, PASS_RESTAURANT_DATA } from "../constants";



const initialState = {
    bestFour: [],
    all_restaurants: []
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
        console.log(action.payload);
        return {
            ...state,
            restaurant_data: action.payload,
        }
    }
    else{
        return state;
    }
};

