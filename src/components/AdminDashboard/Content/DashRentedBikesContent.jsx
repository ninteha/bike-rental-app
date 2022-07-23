import React from "react";
import RentedBikes from "../RentedBikes/RentedBikes";
import { Fade } from "react-awesome-reveal";

const DashRentedBikesContent = () => {
  return (
    <Fade delay={100}>
      <div
        style={{
          height: "85vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <h1 style={{ padding: "0 20px" }}>Rented Bikes:</h1>
        <RentedBikes />
      </div>
    </Fade>
  );
};

export default DashRentedBikesContent;
