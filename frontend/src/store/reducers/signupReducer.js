import { SIGNUP } from "../constants";


const initialState = {
  email: '',
};

export const signUpReducer = (state = initialState, action) => {
  if (action.type ===  SIGNUP) {
      return {
        ...state,
        email: action.payload,
      }
    }
  return state;
};