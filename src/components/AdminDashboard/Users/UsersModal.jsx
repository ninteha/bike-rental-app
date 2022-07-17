import { Button } from "@mui/material";
import ReactDOM from "react-dom";

const ModalStyles = {
  width: "50%",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
};

const FormStyles = {
  display: "flex",
  justifyContent: "space-between",
}

const OverlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: 1000,
};
const UsersModal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OverlayStyles}>
        <div style={ModalStyles}>
          <div style={FormStyles}>
            {children}
          </div>
            <Button color="primary" variant="outlined" onClick={onClose}>
              close
            </Button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default UsersModal;
