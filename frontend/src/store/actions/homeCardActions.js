import {HOME_CARD} from "../constants";

export const homeCardAction = (data) => {
    return {
        type: HOME_CARD,
        payload: {
            data
        }
    }
};