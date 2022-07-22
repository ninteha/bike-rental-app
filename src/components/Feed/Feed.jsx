import { Box } from "@mui/material";
import React from "react";
import Posts from "../AdminDashboard/Posts/Posts";

const Feed = () => {
  return (
    <Box
      bgcolor="#fff"
      p={2}
      flex={6}
      style={{
        borderRadius: "0 10px 10px 0",
        overflowY: "auto",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Posts />
    </Box>
  );
};

export default Feed;
