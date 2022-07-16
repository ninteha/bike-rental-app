import { Box } from "@mui/system";
import React from "react";
import DashboardSidebarMenu from "./DashboardSidebarMenu";

const DashboardSidebar = () => {
  return (
    <Box
      bgcolor="#f1f2f6"
      flex={2}
      p={2}
      style={{borderRadius: "10px 0 0 10px"}}
    >
      <DashboardSidebarMenu />
    </Box>
  );
};

export default DashboardSidebar;
