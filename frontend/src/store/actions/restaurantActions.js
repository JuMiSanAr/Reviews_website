import { ALL_RESTAURANTS, PASS_RESTAURANT_DATA } from "../constants";


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