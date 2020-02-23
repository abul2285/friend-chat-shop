import React from "react";
import { Link } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  IconButton,
  Dialog,
  Avatar,
  Typography,
  Divider,
  DialogContent,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";

import { StyledCard, MyCard } from "../Card/Card";
import { Form, Input } from "../Form/Form";
import Commenter from "../../images/images3.png";
import PostCreator from "../../images/images2.png";

dayjs.extend(relativeTime);

const Comments = ({ postId }) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
    dispatch({ type: "GET_POST", postId: postId });
  };

  const post = useSelector(state => state.post.post);
  const authenticated = useSelector(state => state.friend.authenticated);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "CREATE_COMMENT", payload: { body: comment }, postId });
    setComment("");
  };

  let commentsMarkup;
  if (post.comments) {
    commentsMarkup = post.comments.map(comment => {
      return (
        <MyCard>
          <MyCard.Content>
            <div className="comment--box">
              <Avatar src={Commenter} className="commenter--image" />
              <div className="commenter--content">
                <Typography>
                  <Link to={`/friend/${comment.commenter}`}>
                    {comment.commenter}
                  </Link>
                </Typography>
                <Typography>{comment.body}</Typography>
              </div>
            </div>
          </MyCard.Content>
        </MyCard>
      );
    });
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton onClick={handleOpen}>
        <FaCommentDots />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogContent>
          <StyledCard>
            <div className="card-header">
              <Avatar alt="profile-pic" src={PostCreator} />
              <Typography variant="body1">{post.creator}</Typography>
              <Typography variant="body1" color="textSecondary">
                {dayjs(post.createdAt).fromNow()}
              </Typography>
            </div>

            <CardContent>
              <Typography className="post-body" variant="body1">
                {post.body}
              </Typography>
            </CardContent>
            <Divider />

            <CardContent>{commentsMarkup}</CardContent>

            <CardActions>
              {authenticated ? (
                <Form onSubmit={handleSubmit} className="comment-form">
                  <Input>
                    <Input.Field
                      name="comment"
                      id="comment"
                      type="text"
                      multiline
                      fullWidth
                      row="3"
                      label="comment"
                      value={comment}
                      variant="outlined"
                      required
                      onChange={e => setComment(e.target.value)}
                    />
                  </Input>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                  >
                    Submit comment
                  </Button>
                </Form>
              ) : (
                <p>
                  {" "}
                  If you want comment in this post you have to login first ..
                  Please Login <Link to="/login">Here</Link>
                </p>
              )}
            </CardActions>
          </StyledCard>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Comments;
