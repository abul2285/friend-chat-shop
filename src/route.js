import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...restOfProps }) => {
  const authenticated = useSelector(state => state.friend.authenticated);
  return (
    <Route
      {...restOfProps}
      render={props =>
        authenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
