import React from "react";
import { FaTrash } from "react-icons/fa";
import { IconButton, Tooltip } from "@material-ui/core";
import { useDispatch } from "react-redux";

const DeletePost = ({ postId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: "DELETE_POST", payload: postId });
  };

  return (
    <Tooltip title="Delete" placement="top">
      <IconButton onClick={handleDelete} className="test-class">
        <FaTrash />
      </IconButton>
    </Tooltip>
  );
};

export default DeletePost;
