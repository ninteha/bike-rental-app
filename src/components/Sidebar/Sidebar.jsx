import { Box, Grid, Paper } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor="#f1f2f6"
      flex={2}
      p={2}
      style={{ borderRadius: "10px 0 0 10px" }}
    >
      <Grid>
        <Paper></Paper>
      </Grid>
    </Box>
  );
};

export default Sidebar;
