import { takeLatest, put, call } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailed,
  loginRequest,
  authRequest,
  authSuccess,
  authFailed,
  getFriendRequest,
  getFriendSuccess,
  getFriendFailed
} from "../actions/friendAction";
import Axios from "axios";
import { UNSET_AUTH_SUCCESS } from "../actionTypes";

function* requestLoginSaga({ userInfo }) {
  try {
    yield put(loginRequest());
    let signupOrlogin = userInfo.userName ? "signup" : "login";
    const res = yield call(() => Axios.post(`/${signupOrlogin}`, userInfo));
    const FBIdToken = `Bearer ${res.data.token}`;
    localStorage.setItem("FBIdToken", FBIdToken);
    Axios.defaults.headers.common["Authorization"] = FBIdToken;
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginFailed(err.response.data));
  }
}

function* setAuthSaga() {
  try {
    yield put(authRequest());
    let token = localStorage.getItem("FBIdToken");
    if (token) {
      yield put(authSuccess());
    }
  } catch (err) {
    yield put(authFailed());
  }
}

function* unsetAuthSaga() {
  localStorage.removeItem("FBIdToken");
  delete Axios.defaults.headers.common["Authorization"];
  yield put({ type: UNSET_AUTH_SUCCESS });
  window.location.href = "/login";
}

function* getFriendSaga() {
  try {
    yield put(getFriendRequest());
    const res = yield call(() => Axios.get("/friend"));
    yield put(getFriendSuccess(res.data));
  } catch (err) {
    yield put(getFriendFailed());
  }
}

function* likePostSaga({ postId }) {
  const res = yield call(() => Axios.get(`/post/${postId}/like`));
  yield put({ type: "LIKE_POST_SUCCESS", payload: res.data });
}

function* unlikePostSaga({ postId }) {
  const res = yield call(() => Axios.get(`/post/${postId}/unlike`));
  yield put({ type: "UNLIKE_POST_SUCCESS", payload: res.data });
}

function* readNotificationSaga({ payload }) {
  yield call(() => Axios.post("/notifications", payload));
  yield put({ type: "NOTIFICATIONS_READ_SUCCESS" });
}

function* uploadImageSaga({ payload }) {
  try {
    yield call(() => Axios.post("/friend/image", payload));
    yield put({ type: "GET_FRIEND" });
  } catch (err) {
    console.log(err);
  }
}

export default [
  takeLatest("LOGIN_USER", requestLoginSaga),
  takeLatest("SIGNUP_USER", requestLoginSaga),
  takeLatest("SET_AUTH", setAuthSaga),
  takeLatest("UPLOAD_IMAGE", uploadImageSaga),
  takeLatest("UNSET_AUTH", unsetAuthSaga),
  takeLatest("GET_FRIEND", getFriendSaga),
  takeLatest("LIKE_POST", likePostSaga),
  takeLatest("UNLIKE_POST", unlikePostSaga),
  takeLatest("READ_NOTIFICATION", readNotificationSaga)
];
