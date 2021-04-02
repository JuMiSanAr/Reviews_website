import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


export const searchResFetch = (search) => {

    return fetchAPI(
        `search/?type=restaurants&search=${search}`,
        false,
        'GET',
        headers
    )
}


export const searchReviewsFetch = (search) => {

    return fetchAPI(
        `search/?type=reviews&search=${search}`,
        false,
        'GET',
        headers
    )
}

export const searchUsersFetch = (search) => {

    return fetchAPI(
        `search/?type=users&search=${search}`,
        false,
        'GET',
        headers
    )
}
