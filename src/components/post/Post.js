import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

import {
  Typography,
  Avatar,
  CardContent,
  CardActions,
  Divider,
  Box
} from "@material-ui/core";

import DeletePost from "../button/DeletePost";
import LikeButton from "../button/LikeButton";
import { StyledCard } from "../Card/Card";
import Comments from "./Comment";

dayjs.extend(RelativeTime);

const Post = ({ post, modelOpen }) => {
  const {
    body,
    createdAt,
    likeCount,
    commentCount,
    creator,
    postId,
    userImage
  } = post;
  const authenticated = useSelector(state => state.friend.authenticated);
  const friend = useSelector(state => state.friend.credentials.userName);

  let deleteButtonMarkup;
  if (friend === creator) {
    deleteButtonMarkup = <DeletePost postId={postId} />;
  } else {
    deleteButtonMarkup = null;
  }

  return (
    <StyledCard>
      <div className="card-header">
        <Avatar alt="profile-pic" src={userImage} />
        <Link to={`/friend/${creator}`}>
          <Typography variant="body1">{creator}</Typography>
        </Link>
        <Typography variant="body1" color="textSecondary">
          {dayjs(createdAt).fromNow()}
        </Typography>
      </div>

      <CardContent>
        {authenticated && deleteButtonMarkup}
        <Typography className="post-body" variant="body1">
          {body}
        </Typography>
      </CardContent>
      <Divider />

      <CardActions disableSpacing>
        {/* Like Button */}
        <Box>
          <LikeButton postId={postId} />
          {likeCount} likes
        </Box>

        {/* Comment Button */}
        <Box>
          <Comments postId={postId} modelOpen={modelOpen} />
          {commentCount} comments
        </Box>
      </CardActions>
    </StyledCard>
  );
};

export default Post;
