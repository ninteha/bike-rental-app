import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { UserAuth } from "../../context/AuthContext";

const Header = ({ isAuth, setIsAuth, setIsAdmin, isAdmin }) => {
  const { logout } = UserAuth();

  // Log out
  const logOut = async () => {
    await logout(auth);
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname = "/login";
    setIsAdmin(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Bike Rental
            </Link>
          </Typography>
          {/* Logged in and Logged out Buttons switch */}
          {!isAuth ? (
            <>
              <Button color="inherit">
                <Link
                  to="/login/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/signup/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Register
                </Link>
              </Button>
            </>
          ) : (
            <>
              {isAdmin ? (
                <Button color="inherit">
                  <Link
                    to="/dashboard/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dashboard
                  </Link>
                </Button>
              ) : null}
              <Button
                style={{ textDecoration: "none", color: "black" }}
                onClick={logOut}
              >
                LOG OUT
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
