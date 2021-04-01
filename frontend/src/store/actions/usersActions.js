import {ALL_USERS, GET_USER_INFO} from "../constants";

export const allUserAction = (data) => {
    return {
        type: ALL_USERS,
        payload: {
            data
        }
    }
};

export const getUserInfoAction = (data) => {
    return {
        type: GET_USER_INFO,
        payload: {
            data
        }
    }
}