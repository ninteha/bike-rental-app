import { Divider, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DashUsersLayout = ({ email, password, usersId, deleteUser }) => {
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
            Email: {email}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1">Password: {password}</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1"></Typography>
        </div>
        <div>
          <span style={{ marginRight: "15px" }}>
            <EditIcon color="primary" />
          </span>
          <span
          style={{cursor: "pointer"}}
          >
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
