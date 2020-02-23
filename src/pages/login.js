import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Paper, Typography } from "@material-ui/core";

import { FaRegEnvelope, FaLock } from "react-icons/fa";
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
    <div className="form-wrapper">
      <Paper variant="elevation" elevation={10} className="form-paper">
        <Form onSubmit={handleSubmit}>
          <Typography className="form-title">LOGIN</Typography>

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
    </div>
  );
};

export default Login;
