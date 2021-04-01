import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


const allUsersFetch = () => {

    return fetchAPI(
        'users/list/',
         false,
        'GET',
        headers
    )
}

export default allUsersFetch;