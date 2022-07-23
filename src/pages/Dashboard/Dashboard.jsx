import { Stack } from "@mui/material";
import React from "react";
import DashboardSidebar from "../../components/AdminDashboard/Sidebar/DashboardSidebar";
import DashboardContent from "../../components/AdminDashboard/Content/DashboardContent";
import { Fade } from "react-awesome-reveal";

const stackStyle = {
  margin: "10px 40px",
  height: "90vh",
  boxShadow: "2px 3px 5px 0px rgba(0,0,0,0.37)",
  borderRadius: "10px",
};

const Dashboard = () => {
  return (
    <Fade delay={200}>
      <Stack direction="row" justifyContent="center" style={stackStyle}>
        <DashboardSidebar />
        <DashboardContent />
      </Stack>
    </Fade>
  );
};

export default Dashboard;
