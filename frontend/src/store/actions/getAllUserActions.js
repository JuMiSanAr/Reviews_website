import {ALL_USERS} from "../constants";

export const allUserAction = (data) => {
    return {
        type: ALL_USERS,
        payload: {
            data
        }
    }
};