import { AddAPhotoOutlined } from "@mui/icons-material";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";

const paperStyle = {
  padding: 30,
  height: "0%",
  width: 330,
  margin: "120px auto",
};
const avatarStyle = { backgroundColor: "#1976D2" };
const breakStyle = { margin: "15px auto" };

const CreatePost = () => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddAPhotoOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter your Email"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter your Password"
          fullWidth
          type="password"
          required
          style={breakStyle}
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Log in
        </Button>
      </Paper>
    </Grid>
  );
};

export default CreatePost;
