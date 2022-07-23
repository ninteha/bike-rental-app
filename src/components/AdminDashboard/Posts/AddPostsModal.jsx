import { Alert, Button, TextField, Typography } from "@mui/material";
import ReactDOM from "react-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../FirebaseConfig";

const ModalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "0 50px 50px 50px",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const FormStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const OverlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: 1000,
};

const AddPostsModal = ({ onClose, open, reload, setReload }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState();
  const [model, setModel] = useState();
  const [error, setError] = useState("");

  const postsRef = collection(db, "bikes");
  // Add Posts handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(postsRef, {
        id: auth.currentUser.uid,
        title,
        location,
        img,
        color,
        price,
        model,
        uploaded: new Date(),
      });
      onClose();
      setReload(!reload);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OverlayStyles}>
        <div style={ModalStyles}>
          <div style={FormStyles}>
            <ClearIcon
              sx={{
                margin: "0 0 30px 100%",
                padding: "20px 0 0 0",
                cursor: "pointer",
              }}
              color="primary"
              variant="outlined"
              onClick={onClose}
            />
            {error ? <Alert severity="error">{error}</Alert> : null}
            <Typography sx={{ marginBottom: "10px" }} variant="h6">
              Add Post
            </Typography>
            <TextField
              label="Title"
              placeholder="Title"
              fullWidth
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              label="Image Link"
              placeholder="Image Link"
              fullWidth
              type="img"
              required
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
            <TextField
              label="Location"
              placeholder="Location"
              fullWidth
              type="text"
              required
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <TextField
              label="Model"
              placeholder="Model"
              fullWidth
              type="text"
              required
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
            <TextField
              label="Price"
              placeholder="Price"
              fullWidth
              type="number"
              required
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              label="Color"
              placeholder="Color"
              fullWidth
              type="text"
              required
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <Button
              sx={{ marginTop: "10px" }}
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              Add Post
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default AddPostsModal;
