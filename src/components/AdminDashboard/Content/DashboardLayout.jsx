import React from "react";
import { Box } from "@mui/system";

const DashboardLayout = ({ children }) => {
  return (
    <Box
      bgcolor="#fff"
      p={2}
      flex={6}
      style={{ borderRadius: "0 10px 10px 0" }}
    >
      {children}
    </Box>
  );
};

export default DashboardLayout;
