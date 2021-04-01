import { ALL_RESTAURANTS, PASS_RESTAURANT_DATA, NEW_RESTAURANT } from "../constants";


export const getAllRestaurantsAction = (data) => {
    return {
        type: ALL_RESTAURANTS,
        payload: {
            data
        }
    }
};

// export const newRestaurantAction = (data) => {
//     return {
//         type: NEW_RESTAURANT,
//         payload: {
//             data
//         }
//     }
// };


export const passRestaurantData = (data) => {
    return {
        type: PASS_RESTAURANT_DATA,
        payload: { data }
    }

}