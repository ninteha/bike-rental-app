import {
  Button,
  Divider,
  FormControl,
  Input,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

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
  rentalDate,
  location,
  updatePost,
  setPostData,
  postData,
  setIsEditing,
  isEditing,
  uploaded,
  cancelRent,
}) => {
  const [newRating, setNewRating] = useState(rating);
  const [selectedDate, setSelectedDate] = useState(uploaded);

  useEffect(() => {
    const handleRating = () => {
      console.log(newRating);
      setPostData({ ...postData, rating: newRating });
    };
    if (newRating !== rating) {
      handleRating();
      updatePost(postsId);
      console.log("updated !!!!!");
    } else return;
  }, [newRating, postData, postsId, rating, setPostData, updatePost]);

  console.log(moment(rentalDate).format("L"));

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
                objectFit: "cover",
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
                  placeholder={title}
                  defaultValue={title}
                  onChange={(e) => {
                    setPostData({ ...postData, title: e.target.value });
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
                  placeholder={color}
                  defaultValue={color}
                  onChange={(e) => {
                    setPostData({ ...postData, color: e.target.value });
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
                  type="number"
                  placeholder={price}
                  defaultValue={price}
                  onChange={(e) => {
                    setPostData({ ...postData, price: e.target.value });
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
                  placeholder={location}
                  defaultValue={location}
                  onChange={(e) => {
                    setPostData({ ...postData, location: e.target.value });
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
                  placeholder={model}
                  defaultValue={model}
                  onChange={(e) => {
                    setPostData({ ...postData, model: e.target.value });
                  }}
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
                readOnly={pathname === "/dashboard/posts/" ? true : false}
                defaultValue={rating ? rating : 0}
                precision={1}
                onChange={(e) => {
                  setNewRating(Number(e.target.value));
                }}
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
            {!rentalDate ? (
              <>
                <Typography variant="body1">Rent a bike:</Typography>
                <DatePicker
                  selected={selectedDate}
                  minDate={new Date()}
                  filterDate={(date) =>
                    moment(date).format("L") !== moment(rentalDate).format("L")
                  }
                  onChange={(date) => {
                    setSelectedDate(date);
                    setPostData({ ...postData, rentalDate: date });
                  }}
                />
              </>
            ) : null}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "15px",
              }}
            >
              {!rentalDate ? (
                <Button onClick={() => updatePost(postsId)} variant="contained">
                  Rent a bike!
                </Button>
              ) : (
                <Button
                  onClick={() => cancelRent(postsId)}
                  variant="contained"
                  color="error"
                >
                  Cancel a rent
                </Button>
              )}
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
