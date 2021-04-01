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
