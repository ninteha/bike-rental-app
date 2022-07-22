import React from "react";
import Categories from "./components/Categories";
import SearchInput from "./components/SearchInput";

const SearchBikes = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 10px",
      }}
    >
      <SearchInput />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          width: "100%",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <Categories />
      </div>
    </div>
  );
};

export default SearchBikes;
