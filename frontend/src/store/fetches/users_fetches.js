import {fetchAPI} from "../fetchAPI";
import {headers, headersWithToken} from "../constants";


export const getLoggedInUserInfoFetch = () => {

    return fetchAPI(
        'me/',
        false,
        'GET',
        headersWithToken
    )
}

export const allUsersFetch = () => {

    return fetchAPI(
        'users/list/',
         false,
        'GET',
        headers
    )
}

export const getLoggedInUserReviews = (id) => {

    return fetchAPI(
        `reviews/user/${id}`,
        false,
        'GET',
        headersWithToken
    )
}

export const getLoggedInUserReviewComments = (id) => {

    return fetchAPI(
        `review/comment/${id}`,
        false,
        'GET',
        headersWithToken
    )
}