import {fetchAPI} from "../fetchAPI";
import {headers, headersWithToken, headersWithTokenAndImage} from "../constants";


export const aRestaurantsFetch = (id) => {

    return fetchAPI(
        `restaurants/${id}`,
        false,
        'GET',
        headers
    )
}

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

export const usersRestaurantsFetch = (id) => {
    return fetchAPI(
        `restaurants/user/${id}`,
        false,
        'GET',
        headersWithToken,
    )
}