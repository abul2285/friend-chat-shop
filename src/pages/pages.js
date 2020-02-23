import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import JwtDecode from "jwt-decode";
import Axios from "axios";
import "../style.css";

import {
  ThemeProvider as MuiThemeProvider,
  createGenerateClassName,
  createMuiTheme,
  StylesProvider
} from "@material-ui/core/styles";

import Login from "./login";
import PrivateRoute from "../route";
import Home from "./home";
import Signup from "./signup";
import Navbar from "../components/layout/Navbar";
import { theme } from "../theme";
import Friend from "./friend";

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

const Pages = () => {
  const dispatch = useDispatch();

  Axios.defaults.baseURL =
    "https://us-central1-friends-chat-shop.cloudfunctions.net/api";

  let token = localStorage.FBIdToken;
  if (token) {
    const decodedToken = JwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      dispatch({ type: "UNSET_AUTH" });
    } else {
      dispatch({ type: "SET_AUTH" });
      Axios.defaults.headers.common["Authorization"] = token;
      dispatch({ type: "GET_FRIEND" });
    }
  }
  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <BrowserRouter>
          <div
            style={{
              maxWidth: "1200px",
              margin: "50px auto 0"
            }}
          >
            <Navbar />
            <Switch>
              <PrivateRoute component={Login} path="/login" />
              <PrivateRoute component={Signup} path="/signup" />
              <Route exact path="/" component={Home} />
              <Route exact path="/friend/:userName" component={Friend} />
              <Route
                exact
                path="/friend/:userName/post/:postId"
                component={Friend}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Pages;
