import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";

const ClickIcon = ({ children, handleIcon, ...restOfProps }) => {
  return (
    <Tooltip {...restOfProps}>
      <IconButton onClick={handleIcon}>{children}</IconButton>
    </Tooltip>
  );
};

export default ClickIcon;
