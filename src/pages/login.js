import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Grid, Button, Paper, Typography } from "@material-ui/core";

import { FaRegEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
import { Form, Input } from "../components/Form/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispathc = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    dispathc({ type: "LOGIN_USER", userInfo: { email, password } });
    setEmail("");
    setPassword("");
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
            <Typography variant="h4">LOGIN</Typography>

            <Input>
              <Input.Icon>
                <FaRegEnvelope />
              </Input.Icon>
              <Input.Field
                name="email"
                fullWidth
                id="email"
                type="email"
                label="Email"
                autoComplete="off"
                variant="outlined"
                required
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
                variant="outlined"
                required
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Input>

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>

            <Typography variant="body1">
              Don't have any account? Please Sign up{" "}
              <Link to="/signup">here</Link>
            </Typography>
          </Form>
        </Paper>
      </Grid>
      <Grid item sm></Grid>
    </Grid>
  );
};

export default Login;
