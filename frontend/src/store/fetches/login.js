import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";
import {loginAction} from "../actions/loginActions";
import {useDispatch} from "react-redux";


const loginFetch = (email, password) => {

    return fetchAPI(
        'auth/token/',
        {email: email, password: password},
        'POST',
        headers
    )
}

export default loginFetch;