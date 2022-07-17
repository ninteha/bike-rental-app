import React from "react";
import Users from "../Users/Users";

const DashUsersContent = () => {
  return (
    <div
      style={{
        height: "85vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <h1 style={{padding: "0 20px"}}>Users Data:</h1>
      <Users />
    </div>
  );
};

export default DashUsersContent;
