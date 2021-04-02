import {SEARCH_RESTAURANTS, SEARCH_REVIEWS, SEARCH_USERS} from "../constants";


export const searchResAction = (data) => {
    return {
        type: SEARCH_RESTAURANTS,
        payload: {
            data
        }
    }
};

export const searchReviewsAction = (data) => {
    return {
        type: SEARCH_REVIEWS,
        payload: {
            data
        }
    }
};

export const searchUsersAction = (data) => {
    return {
        type: SEARCH_USERS,
        payload: {
            data
        }
    }
};