import {
  Alert,
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { auth, db } from "../FirebaseConfig";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

const paperStyle = {
  padding: 30,
  height: "0%",
  width: 330,
  margin: "120px auto",
};

const avatarStyle = { backgroundColor: "#1976D2" };
const breakStyle = { margin: "15px auto" };

const Signup = () => {
  // Register User into Firebase
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();

  const [isRegistered, setIsRegistered] = useState(false);
  const userRef = collection(db, "users");
  let role = "user";

  // Register handler
  const handleSubmit = async (err) => {
    try {
      await createUser(email, password, role);
      await addDoc(userRef, {
        id: auth.currentUser.uid,
        email,
        password,
        role,
      });
      setIsRegistered(true);
      setTimeout(() => {
        window.location.pathname = "/login";
      }, 2000);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Sign Up</h2>
          {isRegistered ? (
            <Alert style={breakStyle}>Account is created!</Alert>
          ) : null}
          {error ? (
            <Alert severity="error" style={breakStyle}>
              {error}
            </Alert>
          ) : null}
        </Grid>
        <TextField
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label="Email"
          placeholder="Enter your Email"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="Password"
          placeholder="Enter your Password"
          fullWidth
          type="password"
          required
          style={breakStyle}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Typography style={breakStyle}>
          Already have an account?
          <Link to="/login/">
            <br />
            Sign In
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
