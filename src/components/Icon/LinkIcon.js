import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const LinkIcon = ({ children, pathLocation, ...restOfProps }) => {
  return (
    <Tooltip {...restOfProps}>
      <NavLink to={pathLocation}>
        <IconButton>{children}</IconButton>
      </NavLink>
    </Tooltip>
  );
};

export default LinkIcon;
