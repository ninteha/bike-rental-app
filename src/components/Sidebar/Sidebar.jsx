import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import SearchBikes from "../SearchBikes/SearchBikes";

const Sidebar = () => {
  return (
    <Box
      bgcolor="#f1f2f6"
      flex={2}
      p={2}
      style={{ borderRadius: "10px 0 0 10px" }}
    >
      <Grid style={{ width: "100%" }}>
        <Paper style={{ height: "100%" }}>
          <SearchBikes />
        </Paper>
      </Grid>
    </Box>
  );
};

export default Sidebar;
