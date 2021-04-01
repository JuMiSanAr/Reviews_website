import {ALL_RESTAURANTS, FILTER_RESTAURANT_DATA, PASS_RESTAURANT_DATA} from "../constants";


export const getAllRestaurants = (data) => {
    return {
        type: ALL_RESTAURANTS,
        payload: {
            data
        }
    }
};


export const passRestaurantData = (data) => {
    return {
        type: PASS_RESTAURANT_DATA,
        payload: { data }
    }

}

export const filterRestaurantData = (data) => {
    return {
        type: FILTER_RESTAURANT_DATA,
        payload: { data }
    }

}