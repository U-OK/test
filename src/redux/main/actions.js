import {
  GET_USER_FAILURE,
  GET_USER_STARTED,
  GET_USER_SUCCESS,
} from "./actionTypes";

import api from "../../api/api";

export const getUser = () => {
  return (dispatch) => {
    dispatch(getUserStarted());

    const token = localStorage.getItem("Token") || "";

    return api
      .GET("/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserFailure(err));
      });
  };
};

const getUserStarted = () => ({
  type: GET_USER_STARTED,
});

const getUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});

const getUserFailure = (err) => ({
  type: GET_USER_FAILURE,
  payload: err,
});
