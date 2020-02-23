import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  GET_FRIEND_REQUEST,
  GET_FRIEND_SUCCESS,
  GET_FRIEND_FAILURE
} from "../actionTypes";

export function loginRequest() {
  return { type: LOGIN_REQUEST };
}
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}
export function loginFailed(payload) {
  return {
    type: LOGIN_FAILURE,
    payload
  };
}

export function authRequest() {
  return { type: SET_AUTH_REQUEST };
}
export function authSuccess() {
  return {
    type: SET_AUTH_SUCCESS
  };
}
export function authFailed() {
  return {
    type: SET_AUTH_FAILURE
  };
}

export function getFriendRequest() {
  return {
    type: GET_FRIEND_REQUEST
  };
}
export function getFriendSuccess(payload) {
  return {
    type: GET_FRIEND_SUCCESS,
    payload
  };
}
export function getFriendFailed() {
  return {
    type: GET_FRIEND_FAILURE
  };
}
