
import { LOGIN } from "../constants";


export const loginAction = (token, user) => {
    return {
        type: LOGIN,
        payload: {
            token,
            user
        }
    }
};
