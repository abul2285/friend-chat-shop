import React, { useState } from "react";
import {
  IconButton,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  Tooltip
} from "@material-ui/core";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Form, Input } from "../Form/Form";

const PostForm = () => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "CREATE_POST", payload: { body: post } });
    setPost("");
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <>
      <Tooltip title="Add Post">
        <IconButton onClick={() => setOpen(true)}>
          <FaPlus />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add New Post!</DialogTitle>

        <DialogContent>
          <Form onSubmit={handleSubmit}>
            <Input.Field
              name="post"
              id="post"
              type="text"
              multiline
              fullWidth
              row="3"
              label="Post"
              value={post}
              required
              variant="outlined"
              onChange={e => setPost(e.target.value)}
            />

            <Button type="submit" variant="contained" fullWidth color="primary">
              Submit Post
            </Button>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostForm;
