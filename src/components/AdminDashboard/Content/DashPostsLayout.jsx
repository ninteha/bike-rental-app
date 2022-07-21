import {
  Button,
  Divider,
  FormControl,
  Input,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DashPostsLayout = ({
  pathname,
  title,
  model,
  postsId,
  color,
  img,
  price,
  deletePost,
  rating,
  startDate,
  setStartDate,
  location,
  updatePost,
  setTitle,
  setColor,
  setModel,
  setPrice,
  setLocation,
  setIsEditing,
  isEditing,
}) => {
  return (
    <div>
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
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <img
              src={img}
              alt="img"
              style={{
                width: "300px",
                height: "220px",
                borderRadius: "8px",
                border: "1px solid black",
              }}
            />
          </div>
        </div>
        <div style={{ width: "100%", margin: "0 10px" }}>
          <Typography
            component={"span"}
            variant="body1"
            sx={{ marginRight: "40px" }}
          >
            Title:
            {isEditing ? (
              <FormControl variant="standard">
                <Input
                  defaultValue={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </FormControl>
            ) : (
              ` ${title}`
            )}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography component={"span"} variant="body1">
            Color:
            {isEditing ? (
              <FormControl variant="standard">
                <Input
                  defaultValue={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
              </FormControl>
            ) : (
              ` ${color}`
            )}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography component={"span"} variant="body1">
            Price:
            {isEditing ? (
              <FormControl variant="standard">
                <Input
                  defaultValue={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </FormControl>
            ) : (
              ` ${price}$`
            )}
          </Typography>
          <Typography variant="body1">
            Location:
            {isEditing ? (
              <FormControl variant="standard">
                <Input
                  defaultValue={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </FormControl>
            ) : (
              ` ${location}`
            )}
          </Typography>
          <Typography variant="body1">
            Model:
            {isEditing ? (
              <FormControl variant="standard">
                <Input
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                  defaultValue={model}
                />
              </FormControl>
            ) : (
              ` ${model}`
            )}
          </Typography>
          <div>
            <Typography variant="body1">
              Rating:
              <Rating
                name="half-rating"
                disabled={pathname === "/dashboard/posts/" ? true : false}
                defaultValue={rating}
                precision={1}
              />
            </Typography>
          </div>
          {isEditing ? (
            <Button
              style={{ height: "40px", marginTop: "10px", marginLeft: "120px" }}
              variant="contained"
              onClick={() => {
                updatePost(postsId);
              }}
            >
              Update
            </Button>
          ) : null}
        </div>
        {pathname !== "/dashboard/posts/" ? (
          <div>
            <Typography variant="body1">Rent a bike:</Typography>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "15px",
              }}
            >
              <Button variant="contained">Rent a bike!</Button>
            </div>
          </div>
        ) : null}
        {pathname === "/dashboard/posts/" ? (
          <div>
            <span
              style={{ marginRight: "15px", cursor: "pointer" }}
              onClick={() => setIsEditing(!isEditing)}
            >
              <EditIcon color="primary" />
            </span>
            <span style={{ cursor: "pointer" }}>
              <DeleteIcon
                onClick={() => {
                  deletePost(postsId);
                }}
                color="error"
              />
            </span>
          </div>
        ) : null}
      </Paper>
    </div>
  );
};

export default DashPostsLayout;
