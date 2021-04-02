import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


export const userProfilePatch = (username, first_name, last_name, email,
                    location, phone, things_i_like,  description ) => {
    return fetchAPI(
        'auth/token/',
        {username: username,
            first_name: first_name,
            last_name:last_name,
            email:email,
            location:location,
            phone:phone,
            things_i_like:things_i_like,
            description: description},
        'PATCH',
        headers
    )
}

