import { TextField } from "@mui/material";
import React from "react";

const SearchInput = () => {
  return (
    <TextField
      style={{ marginTop: "20px" }}
      id="outlined-basic"
      label="Search..."
      variant="outlined"
    />
  );
};

export default SearchInput;
