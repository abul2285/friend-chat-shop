import React from "react";
import { Toolbar, AppBar, IconButton, Tooltip } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaBell, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import PostForm from "../post/PostForm";
import LinkIcon from "../Icon/LinkIcon";
import Notification from "../Notification/Notification";

const Navbar = () => {
  const authenticated = useSelector(state => state.friend.authenticated);
  return (
    <AppBar style={{ height: "50px" }}>
      <Toolbar style={{ margin: "0 auto" }}>
        {authenticated ? (
          <>
            <LinkIcon title="Home" placement="left" pathLocation="/">
              <FaHome />
            </LinkIcon>

            <PostForm />
            {/* <Tooltip title="Notification" placement="right">
              <IconButton>
                <FaBell />
              </IconButton>
            </Tooltip> */}
            <Notification />
          </>
        ) : (
          <>
            <LinkIcon title="Home" placement="left" pathLocation="/">
              <FaHome />
            </LinkIcon>
            <LinkIcon title="Login" pathLocation="/login">
              <FaSignInAlt />
            </LinkIcon>
            <LinkIcon title="Sign up" placement="right" pathLocation="/signup">
              <FaUserPlus />
            </LinkIcon>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
