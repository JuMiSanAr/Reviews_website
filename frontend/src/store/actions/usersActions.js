import {ALL_USERS, GET_USER_INFO, USER_REVIEW, USER_REVIEW_COMMENT, USER_RESTAURANTS} from "../constants";

export const allUserAction = (data) => {
    return {
        type: ALL_USERS,
        payload: {
            data
        }
    }
};

export const getUserInfoAction = (data) => {
    return {
        type: GET_USER_INFO,
        payload: {
            data
        }
    }
}

export const getUserReviews = (data) => {
    return {
        type: USER_REVIEW,
        payload: {
            data
        }
    }
}

export const getCommentReview = (data) => {
    return {
        type: USER_REVIEW_COMMENT,
        payload: {
            data
        }
    }
}

export const getUserRestaurants = (data) => {
    return {
        type: USER_RESTAURANTS,
        payload: {
            data
        }
    }
}