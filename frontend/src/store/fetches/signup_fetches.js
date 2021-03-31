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

export const activateAccountFetch = (body) => {
        return fetchAPI(
        'registration/validate/',
            {
            email: body.email,
            code: body.code,
            username: body.username,
            password1: body.password1,
            password2: body.password2,
            location: body.location
            },
        'PATCH',
        headers
    )
}