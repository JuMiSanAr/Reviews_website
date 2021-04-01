import {ALL_RESTAURANTS, NEW_RESTAURANT} from "../constants";


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