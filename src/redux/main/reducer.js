import {
  GET_USER_FAILURE,
  GET_USER_STARTED,
  GET_USER_SUCCESS,
} from "./actionTypes";

const initialState = {
  email: "",
  name: "",
  email_confirmed: false,
  is_therapist: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_STARTED: {
      return {
        ...state,
        error: null
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GET_USER_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
