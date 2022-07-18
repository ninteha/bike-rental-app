import { Alert, Button, TextField, Typography } from "@mui/material";
import ReactDOM from "react-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
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
const EditUsersModal = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();

  const userRef = collection(db, "users");
  let role = "user";

  // Add Users handler
  const handleSubmit = async (err) => {
    try {
      await createUser(email, password, role);
      await addDoc(userRef, {
        id: auth.currentUser.uid,
        email,
        password,
        role,
      });
      onClose();
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
              Add Users
            </Typography>
            <TextField
              label="Email"
              placeholder="Enter your Email"
              fullWidth
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              label="Password"
              placeholder="Enter your Password"
              fullWidth
              type="password"
              required
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setPassword(e.target.value);
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
              Add User
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default EditUsersModal;
