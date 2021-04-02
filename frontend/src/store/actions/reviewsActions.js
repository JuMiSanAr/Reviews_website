import {GET_ALL_REVIEWS} from "../constants";


export const getAllReviewsAction = (data) => {
    return {
        type: GET_ALL_REVIEWS,
        payload: {
            data
        }
    }
};

