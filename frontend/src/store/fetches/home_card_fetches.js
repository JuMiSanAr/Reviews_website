import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


const homeCardFetch = () => {

    return fetchAPI(
        'home/',
         false,
        'GET',
        headers
    )
}

export default homeCardFetch;