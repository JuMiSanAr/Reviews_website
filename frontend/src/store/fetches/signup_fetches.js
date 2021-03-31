import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


export const signupCodeFetch = (email) => {

    return fetchAPI(
        'registration/',
        {email: email},
        'POST',
        headers,
        false
    )
}


export const activateAccountFetch = (data) => {
    //     return fetchAPI(
    //     'registration/',
    //     {email: email},
    //     'POST',
    //     headers,
    //     false
    // )
}