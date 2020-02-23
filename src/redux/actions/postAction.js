import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
} from "../actionTypes";

export const createPostRequest = () => ({ type: CREATE_POST_REQUEST });
export function createPostSuccess(payload) {
  return {
    type: CREATE_POST_SUCCESS,
    payload
  };
}
export function createPostFailed() {
  return {
    type: CREATE_POST_FAILURE
  };
}

export const createCommentRequest = () => ({ type: CREATE_COMMENT_REQUEST });
export function createCommentSuccess(payload) {
  console.log(payload);
  return {
    type: CREATE_COMMENT_SUCCESS,
    payload
  };
}
export function createCommentFailed() {
  return {
    type: CREATE_COMMENT_FAILURE
  };
}

export const getPostsRequest = () => ({ type: GET_POSTS_REQUEST });
export function getPostsSuccess(payload) {
  return {
    type: GET_POSTS_SUCCESS,
    payload
  };
}
export function getPostsFailed() {
  return {
    type: GET_POSTS_FAILURE
  };
}

export const getPostRequest = () => ({ type: GET_POST_REQUEST });
export function getPostSuccess(payload) {
  return {
    type: GET_POST_SUCCESS,
    payload
  };
}
export function getPostFailed() {
  return {
    type: GET_POST_FAILURE
  };
}

export const deletePostRequest = () => ({ type: DELETE_POST_REQUEST });
export function deletePostSuccess(payload) {
  return {
    type: DELETE_POST_SUCCESS,
    payload
  };
}
export function deletePostFailed() {
  return {
    type: DELETE_POST_FAILURE
  };
}
