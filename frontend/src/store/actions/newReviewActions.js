import {NEW_REVIEW} from "../constants";


export const newReviewAction = (data) => {
    return {
        type: NEW_REVIEW,
        payload: {
            data
        }
    }
};