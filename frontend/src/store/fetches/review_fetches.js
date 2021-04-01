import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";


const newReviewFetch = (addValueHere) => {

    return fetchAPI(
        'reviews/new/{restaurant_id}/',
        {text_content: addValueHere},
        'POST',
        headersWithToken
    )
};

export default newReviewFetch;
