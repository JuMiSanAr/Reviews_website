import {fetchAPI} from "../fetchAPI";
import {headers, headersWithToken, headersWithTokenAndImage} from "../constants";


export const allRestaurantsFetch = () => {

    return fetchAPI(
        `restaurants/`,
        false,
        'GET',
        headers
    )
}

export const newRestaurantFetch = (formData) => {

        return fetchAPI(
        `restaurants/new/`,
        formData,
        'POST',
        headersWithTokenAndImage,
        true,
        true,
    )
}