import { Box, Grid, Paper } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor="lightblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Grid>
        <Paper>
          
        </Paper>
      </Grid>
    </Box>
  );
};

export default Sidebar;
