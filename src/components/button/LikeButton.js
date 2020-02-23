import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton, Tooltip } from "@material-ui/core";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const LikeButton = ({ postId }) => {
  const { authenticated, likes } = useSelector(state => state.friend);
  let liked = likes && likes.some(like => like.postId === postId);

  const dispatch = useDispatch();
  const likePost = () => {
    dispatch({ type: "LIKE_POST", postId });
  };

  const unlikePost = () => {
    dispatch({ type: "UNLIKE_POST", postId });
  };

  let likeButtonMarkup = authenticated ? (
    liked ? (
      <FaThumbsUp color="green" />
    ) : (
      <FaThumbsUp color="gray" />
    )
  ) : (
    <Link to="/login">
      <FaThumbsUp color="gray" />
    </Link>
  );

  return (
    <Tooltip title={liked ? "Unlike" : "Like"} placement="top">
      <IconButton onClick={liked ? unlikePost : likePost}>
        {likeButtonMarkup}
      </IconButton>
    </Tooltip>
  );
};

export default LikeButton;
