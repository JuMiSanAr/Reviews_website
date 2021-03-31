
import { LOGIN } from "../constants";


export const loginAction = (token) => {
    return {
        type: LOGIN,
        payload: {
            token
        }
    }
};
