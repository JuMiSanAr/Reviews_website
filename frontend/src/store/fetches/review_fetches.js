import {fetchAPI} from "../fetchAPI";
import {headers, headersWithToken} from "../constants";


export const newReviewFetch = (addValueHere, rating= '3') => {
console.log(headersWithToken)
    return fetchAPI(
        'reviews/new/1/',
        {review: addValueHere, rating: rating},
        'POST',
        headersWithToken
    )
};


export const getAllReviewsFetch = () => {
        return fetchAPI(
            `reviews/`,
            false,
            'GET',
            headers
    )
}

