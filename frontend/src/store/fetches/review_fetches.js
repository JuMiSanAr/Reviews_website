import {fetchAPI} from "../fetchAPI";
import {headers, headersWithToken} from "../constants";


export const newReviewFetch = (input, rating, restaurantID) => {

    return fetchAPI(
        `reviews/new/${restaurantID}/`,
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


export const likeOrUnlikeReviewFetch = (reviewId) => {
    return fetchAPI(
        `reviews/like/${reviewId}/`,
        false,
        'PATCH',
        headersWithToken
    )

}
