import {
  AUTH_FAILURE,
  AUTH_STARTED,
  AUTH_SUCCES,
  LOGIN_STARTED,
  LOGIN_FAILURE, 
  LOGIN_SUCCES
} from "./actionTypes";

const initialState = {
  isAuth: Boolean(localStorage.getItem("Token")),
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_STARTED: {
      return {
        ...state,
        error: null
      };
    }
    case AUTH_SUCCES: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LOGIN_STARTED: {
      return {
        ...state,
        error: null
      };
    }
    case LOGIN_SUCCES: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
