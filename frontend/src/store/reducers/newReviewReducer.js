import {NEW_REVIEW} from "../constants";

const initialState = {
   review: '',
};

export const newReviewReducer = (state = initialState, action) => {
  if (action.type === NEW_REVIEW) {

      return {
          ...state,
          review: action.payload,
      }
  }
  return state;
};