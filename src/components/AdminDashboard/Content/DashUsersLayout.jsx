import {
  Button,
  Divider,
  FormControl,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DashUsersLayout = ({
  email,
  password,
  usersId,
  deleteUser,
  isEditing,
  setIsEditing,
  userData,
  setUserData,
  updateUser,
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
          <Typography variant="body1" sx={{ marginRight: "40px" }}>
            Email:
            {isEditing ? (
              <FormControl variant="standard">
                <Input
                  placeholder={email}
                  defaultValue={email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                />
              </FormControl>
            ) : (
              ` ${email}`
            )}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1">
            Password:
            {isEditing ? (
              <FormControl variant="standard">
                <Input
                  placeholder={password}
                  defaultValue={password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                />
              </FormControl>
            ) : (
              ` ${password}`
            )}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1"></Typography>
          {isEditing ? (
            <Button
              style={{ height: "40px", marginTop: "10px", marginLeft: "120px" }}
              variant="contained"
              onClick={() => {
                updateUser(usersId);
              }}
            >
              Update
            </Button>
          ) : null}
        </div>
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
                deleteUser(usersId);
              }}
              color="error"
            />
          </span>
        </div>
      </Paper>
    </div>
  );
};

export default DashUsersLayout;
