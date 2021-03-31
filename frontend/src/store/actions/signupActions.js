
import { SIGNUP } from "../constants";


export const signupAction = (data) => {
    return {
        type: SIGNUP,
        payload: {
            data
        }
    }
};