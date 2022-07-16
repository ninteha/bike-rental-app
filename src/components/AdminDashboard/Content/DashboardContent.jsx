import React from "react";
import DashboardLayout from "./DashboardLayout";
import { Outlet } from "react-router-dom";
import Typography from '@mui/material/Typography'


const DashboardWelcome = () => {
  return (
    <DashboardLayout>
      <Typography variant="h5" color="initial">Welcome</Typography>
      <Outlet />
    </DashboardLayout>
  );
};

export default DashboardWelcome;
