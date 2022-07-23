import React from "react";
import DashboardLayout from "./DashboardLayout";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { UserAuth } from "../../../context/AuthContext";

const DashboardWelcome = () => {
  const { user } = UserAuth();
  return (
      <DashboardLayout>
        <Typography variant="h5" color="initial" sx={{ padding: "0 20px" }}>
          Welcome, {user.email}
        </Typography>
        <Outlet />
      </DashboardLayout>
  );
};

export default DashboardWelcome;
