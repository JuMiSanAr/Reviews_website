import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


const searchResFetch = (type,query) => {

    return fetchAPI(
        'search/'`${query}`,
        false,
        'GET',
        headers
    )
}

export default searchResFetch;