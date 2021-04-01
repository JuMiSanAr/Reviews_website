import {ALL_CATEGORIES} from "../constants";

export const allCategoriesAction = (data) => {
    return {
        type: ALL_CATEGORIES,
        payload: {
            data
        }
    }
};