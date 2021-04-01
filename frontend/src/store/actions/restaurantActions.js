import {ALL_RESTAURANTS} from "../constants";


export const getAllRestaurants = (data) => {
    return {
        type: ALL_RESTAURANTS,
        payload: {
            data
        }
    }
};