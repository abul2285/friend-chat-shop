import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_AUTH_FAILURE,
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS,
  GET_FRIEND_REQUEST,
  GET_FRIEND_SUCCESS,
  UNSET_AUTH_SUCCESS
} from "../actionTypes";

const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: [],
  loading: false,
  errors: false,
  profile: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SET_AUTH_REQUEST:
    case GET_FRIEND_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loading: false
      };
    case GET_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        ...action.payload
      };
    case "LIKE_POST_SUCCESS":
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            liker: state.credentials.userName,
            postId: action.payload.postId
          }
        ]
      };
    case "NOTIFICATIONS_READ_SUCCESS":
      state.notifications.forEach(not => (not.read = true));
      return {
        ...state
      };
    case "UNLIKE_POST_SUCCESS":
      return {
        ...state,
        likes: state.likes.filter(like => like.postId !== action.payload.postId)
      };

    case UNSET_AUTH_SUCCESS:
      return {
        ...state,
        authenticated: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authenticated: false,
        loading: false,
        errors: action.payload
      };
    case SET_AUTH_FAILURE:
      return {
        ...state,
        authenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
