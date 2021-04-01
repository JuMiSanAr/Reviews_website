import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";


const newReviewFetch = (addValueHere, rating= '3') => {
console.log(headersWithToken)
    return fetchAPI(
        'reviews/new/1/',
        {review: addValueHere, rating: rating},
        'POST',
        headersWithToken
    )
};

export default newReviewFetch;

