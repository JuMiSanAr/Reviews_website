import { ALL_USERS, GET_USER_INFO, USER_REVIEW, USER_REVIEW_COMMENT } from "../constants";


const initialState = {
    users: [],
    loggedInUser: {},
    userReview: [],
    userReviewComment: [],
};

export const usersReducer = (state = initialState, action) => {
    if (action.type === ALL_USERS) {
        return {
            ...state,
            users : action.payload
        }
    }
    else if (action.type === GET_USER_INFO) {
        return {
            ...state,
            loggedInUser : action.payload
        }
    }
    else if (action.type === USER_REVIEW) {
        return {
            ...state,
            userReview : action.payload
        }
    }
    else if (action.type === USER_REVIEW_COMMENT) {
        console.log(action, 'action')
        return {
            ...state,
            userReviewComment : action.payload
        }
    }
    return state;
};