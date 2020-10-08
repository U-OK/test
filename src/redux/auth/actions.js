import {
  AUTH_FAILURE,
  AUTH_STARTED,
  AUTH_SUCCES,
  LOGIN_STARTED,
  LOGIN_FAILURE, 
  LOGIN_SUCCES
} from "./actionTypes";

import api from "../../api/api";

export const auth = (authData) => {
  return (dispatch) => {
    dispatch(authStarted());

    return api
      .PUT("/user", authData)
      .then((res) => {
        const { access_token } = res.data;
        localStorage.setItem("Token", access_token);
        dispatch(authSuccess());
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        dispatch(authFailure(errorMessage));
      });
  };
};

export const login = (loginData) => {
  return (dispatch) => {
    dispatch(loginStarted());

    return api
      .POST("/login", loginData)
      .then((res) => {
        const { access_token } = res.data;
        localStorage.setItem("Token", access_token);
        dispatch(loginSuccess());
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        dispatch(loginFailure(errorMessage));
      });
  };
};

const authStarted = () => ({
  type: AUTH_STARTED,
});

const authSuccess = () => ({
  type: AUTH_SUCCES,
});

const authFailure = (err) => ({
  type: AUTH_FAILURE,
  payload: err,
});

const loginStarted = () => ({
  type: LOGIN_STARTED,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCES,
});

const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  payload: err,
});