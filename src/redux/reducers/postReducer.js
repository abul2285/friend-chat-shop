import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  DELETE_POST_SUCCESS,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  DELETE_POST_FAILURE,
  GET_POSTS_FAILURE,
  DELETE_POST_REQUEST,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  GET_POST_SUCCESS,
  GET_POST_REQUEST,
  GET_POST_FAILURE
} from "../actionTypes";

const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST_REQUEST:
    case DELETE_POST_REQUEST:
    case GET_POSTS_REQUEST:
    case GET_POST_REQUEST:
    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case CREATE_COMMENT_SUCCESS:
      let pIndex = state.posts.findIndex(
        post => post.postId === action.payload.postId
      );
      state.posts[pIndex].commentCount++;
      return {
        ...state,
        loading: false,
        posts: [...state.posts],
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments]
        }
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post.postId !== action.payload)
      };
    case CREATE_POST_FAILURE:
    case DELETE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: []
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: false,
        post: {}
      };
    case "LIKE_POST_SUCCESS":
    case "UNLIKE_POST_SUCCESS":
      let indexof = state.posts.findIndex(
        post => post.postId === action.payload.postId
      );
      state.posts[indexof] = action.payload;
      if (state.post.postId === action.payload.postId) {
        state.post = action.payload;
      }
      return {
        ...state,
        posts: [...state.posts],
        post: {
          ...state.post
        }
      };
    default:
      return state;
  }
}
