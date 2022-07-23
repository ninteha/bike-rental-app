import { Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import { Fade } from "react-awesome-reveal";

const stackStyle = {
  margin: "10px 40px",
  height: "90vh",
  boxShadow: "2px 3px 5px 0px rgba(0,0,0,0.37)",
  borderRadius: "10px",
};

const Mainpage = () => {
  return (
    <Fade delay={600}>
      <div>
        <Stack direction="row" justifyContent="center" style={stackStyle}>
          <Sidebar />
          <Feed />
        </Stack>
      </div>
    </Fade>
  );
};

export default Mainpage;
