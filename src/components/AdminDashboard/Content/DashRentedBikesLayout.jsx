import { Divider, Paper, Typography } from "@mui/material";
import React from "react";
import moment from "moment";

const DashRentedBikesLayout = ({ title, price, location, rentalDate }) => {
  console.log("rented bikes:", rentalDate);

  return (
    <div>
      {rentalDate ? (
        <Paper
          sx={{
            marginTop: "20px",
            padding: "20px",
            minHeight: "10%",
            height: "100%",
            width: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "100%", margin: "0 10px" }}>
            <Typography
              component={"span"}
              variant="body1"
              sx={{ marginRight: "40px" }}
            >
              Title: {title}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography component={"span"} variant="body1">
              Price: {price}$
            </Typography>
            <Typography variant="body1">Location: {location}</Typography>
            <div>
              <Typography variant="body1">
                Rental Date: {moment(rentalDate.toDate()).format("L")}
              </Typography>
            </div>
          </div>
        </Paper>
      ) : null}
    </div>
  );
};

export default DashRentedBikesLayout;
