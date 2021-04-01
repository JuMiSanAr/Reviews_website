import {fetchAPI} from "../fetchAPI";
import {headers, headersWithToken} from "../constants";


const getLoggedInUserInfoFetch = () => {
    return fetchAPI(
        'me/',
        false,
        'GET',
        headersWithToken
    )
}

export default getLoggedInUserInfoFetch;