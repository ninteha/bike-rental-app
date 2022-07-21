import React from "react";
import Posts from "../Posts/Posts";

const DashPostsContent = () => {
  return (
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
  );
};

export default DashPostsContent;
