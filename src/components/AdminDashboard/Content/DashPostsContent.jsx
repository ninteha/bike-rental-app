import React from "react";
import Posts from "../Posts/Posts";
import { Fade } from "react-awesome-reveal";

const DashPostsContent = () => {
  return (
    <Fade delay={100}>
      <div
        style={{
          height: "85vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <h1 style={{ padding: "0 20px" }}>Posts:</h1>
        <Posts />
      </div>
    </Fade>
  );
};

export default DashPostsContent;
