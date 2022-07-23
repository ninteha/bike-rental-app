import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";

const SearchInput = () => {
  const [text, setText] = useState("");
  const {searchFilter,setSearchFilter} = useContext(SearchContext)
  
  useEffect(() => {
    setSearchFilter({...searchFilter, search: text})
  }, [text])


  return (
    <TextField
      style={{ marginTop: "20px" }}
      id="outlined-basic"
      label="Search..."
      variant="outlined"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default SearchInput;
