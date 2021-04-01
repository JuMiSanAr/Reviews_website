import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";


const newReviewFetch = (text_content) => {

    return fetchAPI(
        'reviews/new/{restaurant_id}/',
        //{text_content: reviewInput},
        'POST',
        headersWithToken
    )
};

export default newReviewFetch;
