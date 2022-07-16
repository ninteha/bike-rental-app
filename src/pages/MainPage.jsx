import { Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";

const stackStyle = {
  margin: "10px 40px",
  height: "90vh",
};

const Mainpage = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        style={stackStyle}
      >
        <Sidebar />
        <Feed />
      </Stack>
    </div>
  );
};

export default Mainpage;
