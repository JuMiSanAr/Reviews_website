import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


const categoriesFetch = () => {
    return fetchAPI(
        'restaurants/categories/list/',
        false,
        'GET',
        headers
    )
}

export default categoriesFetch;