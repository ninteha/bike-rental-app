import React from "react";
import RentedBikes from "../RentedBikes/RentedBikes";

const DashRentedBikesContent = () => {
  return (
    <div
      style={{
        height: "85vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <h1 style={{padding: "0 20px"}}>Rented Bikes:</h1>
      <RentedBikes />
    </div>
  );
};

export default DashRentedBikesContent;
