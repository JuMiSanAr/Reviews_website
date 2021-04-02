import {fetchAPI} from "../fetchAPI";
import {headers, headersWithToken} from "../constants";


export const newReviewFetch = (input, rating) => {
    // export const newReviewFetch = (input, rating, restaurantID) => {
console.log(headersWithToken)
    return fetchAPI(
        // `reviews/new/${restaurantID}`,
         `reviews/new/1`,
        {review: input, rating: rating},
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

