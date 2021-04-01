import {SEARCH } from "../constants";

export const searchResAction = (data) => {
    return {
        type: SEARCH,
        payload: {
            data
        }
    }
};