import { LOGIN } from "../constants";

export const login = (token, user) => {
    return {
        type: LOGIN,
        payload: {
            token,
            user
        }
    }
};

export const loginAction = ({ email, password }) => async (dispatch) => {
    // try {
    //     const response = await fetch('auth/token/', { email, password });
    //     console.log("LOGIN ACTION RES", response);

    //     const token = response.data.access;
    //     const user = response.data.user
    //     if (token) {
    //         dispatch(login(token, user)); 
    //         localStorage.setItem('token', token); 
    //     }
    //     return response
    // } catch (error) {
        
    //     return console.log(err);
    // }
};