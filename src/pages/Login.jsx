import { LockOutlined } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Fade } from "react-awesome-reveal";



const paperStyle = {
  padding: 30,
  height: "0%",
  width: 330,
  margin: "120px auto",
};
const avatarStyle = { backgroundColor: "#1976D2" };
const breakStyle = { margin: "15px auto" };

const Login = ({ setIsAuth, isAuth }) => {
  // Login in to Firebase and redirect to Home page
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      window.location.pathname = "/";
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <Fade delay={200}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlined />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          {error && (
            <Alert severity="error" style={breakStyle}>
              {error}
            </Alert>
          )}
          <TextField
            label="Email"
            placeholder="Enter your Email"
            fullWidth
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            placeholder="Enter your Password"
            fullWidth
            type="password"
            required
            style={breakStyle}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Log in
          </Button>
          <Typography style={breakStyle}>
            Don't have an account?
            <Link to="/signup/">
              <br />
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Fade>
  );
};

export default Login;
