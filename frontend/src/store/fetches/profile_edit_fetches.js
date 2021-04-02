import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";


export const userProfilePatch = (username, first_name, last_name, email,
                    location, phone, things_i_like,  description ) => {
    return fetchAPI(
        'me/',
        {username: username,
            first_name: first_name,
            last_name:last_name,
            email:email,
            location:location,
            phone:phone,
            things_i_like:things_i_like,
            description: description},
        'PATCH',
        headersWithToken
    )
}

export const userProfileDelete = () => {
    return fetchAPI(
        'me/',
        false,
        'DELETE',
        headersWithToken
    )
}
