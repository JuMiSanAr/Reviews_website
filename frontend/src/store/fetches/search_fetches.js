import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


const searchResFetch = (search) => {

    return fetchAPI(
        `search/?type=restaurants&search=${search}`,
        false,
        'GET',
        headers
    )
}

export default searchResFetch;