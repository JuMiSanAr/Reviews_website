import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


const allRestaurantsFetch = () => {

    return fetchAPI(
        `restaurants/`,
        false,
        'GET',
        headers
    )
}

export default allRestaurantsFetch;