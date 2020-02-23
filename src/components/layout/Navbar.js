import React from "react";
import { Toolbar, AppBar, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaBell, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import PostForm from "../post/PostForm";

const Navbar = () => {
  const authenticated = useSelector(state => state.friend.authenticated);
  return (
    <AppBar style={{ height: "50px" }}>
      <Toolbar style={{ margin: "0 auto" }}>
        {authenticated ? (
          <>
            <NavLink to="/">
              <IconButton>
                <FaHome />
              </IconButton>
            </NavLink>
            <PostForm />
            <IconButton>
              <FaBell />
            </IconButton>
          </>
        ) : (
          <>
            <NavLink to="/">
              <IconButton>
                <FaHome />
              </IconButton>
            </NavLink>
            <NavLink to="/login">
              <IconButton>
                <FaSignInAlt />
              </IconButton>
            </NavLink>
            <NavLink to="/signup">
              <IconButton>
                <FaUserPlus />
              </IconButton>
            </NavLink>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
