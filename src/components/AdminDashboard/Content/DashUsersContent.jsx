import React from "react";
import Users from "../Users/Users";
import { Fade } from "react-awesome-reveal";

const DashUsersContent = () => {
  return (
    <Fade delay={100}>
      <div
        style={{
          height: "85vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <h1 style={{ padding: "0 20px" }}>Users Data:</h1>
        <Users />
      </div>
    </Fade>
  );
};

export default DashUsersContent;
