import {SEARCH_RESTAURANTS} from "../constants";


export const searchResAction = (data) => {
    return {
        type: SEARCH_RESTAURANTS,
        payload: {
            data
        }
    }
};