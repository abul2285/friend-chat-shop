import { takeLatest, call, put } from "redux-saga/effects";
import {
  createPostRequest,
  createPostSuccess,
  deletePostSuccess,
  createPostFailed,
  deletePostFailed,
  deletePostRequest,
  getPostRequest,
  getPostSuccess,
  getPostFailed,
  createCommentRequest,
  createCommentSuccess,
  getPostsRequest,
  getPostsSuccess,
  getPostsFailed
} from "../actions/postAction";
import Axios from "axios";

function* createPostSaga({ payload }) {
  try {
    yield put(createPostRequest());
    const res = yield call(() => Axios.post("/posts", payload));
    yield put(createPostSuccess(res.data));
  } catch (err) {
    yield put(createPostFailed());
  }
}

function* createCommentSaga({ payload, postId }) {
  try {
    yield put(createCommentRequest());
    const res = yield call(() =>
      Axios.post(`/post/${postId}/comment`, payload)
    );
    yield put(createCommentSuccess(res.data));
  } catch (err) {}
}

function* getPostsSaga() {
  try {
    yield put(getPostsRequest());
    const res = yield call(() => Axios.get("/posts"));
    yield put(getPostsSuccess(res.data));
  } catch (err) {
    yield put(getPostsFailed());
  }
}

function* getPostSaga({ postId }) {
  try {
    yield put(getPostRequest());
    const res = yield call(() => Axios.get(`/post/${postId}`));
    yield put(getPostSuccess(res.data));
  } catch (err) {
    yield put(getPostFailed());
  }
}

function* deletePostSaga({ payload }) {
  try {
    yield put(deletePostRequest());
    yield call(() => Axios.delete(`/post/${payload}`));
    yield put(deletePostSuccess(payload));
  } catch (err) {
    yield put(deletePostFailed());
  }
}

export default [
  takeLatest("GET_POSTS", getPostsSaga),
  takeLatest("GET_POST", getPostSaga),
  takeLatest("CREATE_POST", createPostSaga),
  takeLatest("CREATE_COMMENT", createCommentSaga),
  takeLatest("DELETE_POST", deletePostSaga)
];
