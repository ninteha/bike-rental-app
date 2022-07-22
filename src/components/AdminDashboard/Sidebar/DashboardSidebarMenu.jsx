import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import ListItemText from "@mui/material/ListItemText";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { AddCircle } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const DashboardSidebarMenu = () => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Manage Posts and Users
        </ListSubheader>
      }
    >
      <Link to={"/dashboard/users/"}>
        <ListItemButton style={{ textDecoration: "none", color: "black" }}>
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      </Link>
      <Divider />
      <Link to={"/dashboard/posts/"}>
        <ListItemButton style={{ textDecoration: "none", color: "black" }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText primary="Posts" />
        </ListItemButton>
      </Link>
      <Divider />
      <Link to={"/dashboard/rentedbikes/"}>
        <ListItemButton style={{ textDecoration: "none", color: "black" }}>
          <ListItemIcon>
            <PedalBikeIcon />
          </ListItemIcon>
          <ListItemText primary="Rented Bikes" />
        </ListItemButton>
      </Link>
    </List>
  );
};

export default DashboardSidebarMenu;
