import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {
  FaLock,
  FaEnvelope,
  FaUser,
  FaUserCheck,
  FaUserCircle
} from "react-icons/fa";
import MuiLink from "@material-ui/core/Link";

import { Form, Input } from "../components/Form/Form";

const Signup = () => {
  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispathc = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    dispathc({
      type: "SIGNUP_USER",
      userInfo: { name, email, password, userName }
    });
    setEmail("");
    setPassword("");
    setuserName("");
    setName("");
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item sm></Grid>
      <Grid item sm={5}>
        <Paper
          variant="elevation"
          elevation={10}
          style={{ padding: "10px 20px" }}
        >
          <Form onSubmit={handleSubmit}>
            <FaUserCircle size="100" color="green" />
            <Typography variant="h4">SIGN UP</Typography>
            <Input>
              <Input.Icon>
                <FaUser />
              </Input.Icon>

              <Input.Field
                name="name"
                fullWidth
                id="name"
                type="text"
                autoComplete="off"
                label="Name"
                required
                variant="outlined"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </Input>

            <Input>
              <Input.Icon>
                <FaUserCheck />
              </Input.Icon>

              <Input.Field
                name="userName"
                fullWidth
                id="userName"
                type="text"
                autoComplete="off"
                label="User Name"
                required
                variant="outlined"
                onChange={e => setuserName(e.target.value)}
                value={userName}
              />
            </Input>

            <Input>
              <Input.Icon>
                <FaEnvelope />
              </Input.Icon>
              <Input.Field
                name="email"
                fullWidth
                id="email"
                type="email"
                label="Email"
                autoComplete="off"
                required
                variant="outlined"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Input>

            <Input>
              <Input.Icon>
                <FaLock />
              </Input.Icon>
              <Input.Field
                name="password"
                fullWidth
                id="password"
                type="password"
                label="Password"
                required
                variant="outlined"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Input>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Signup
            </Button>
            <Typography variant="body1">
              All ready have an accout? Then login{" "}
              <Link as={MuiLink} to="/login">
                here
              </Link>
            </Typography>
          </Form>
        </Paper>
      </Grid>
      <Grid item sm></Grid>
    </Grid>
  );
};

export default Signup;
