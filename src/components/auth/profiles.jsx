import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { AuthPopup } from "./authpopup";
import { onAuthStateChanged } from "firebase/auth";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Avatar,
  Box,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Profiles() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(true);
  const [usr, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onAvatarClick = async (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };
  const onLoginClick = async () => {
    if (!usr) setIsLoginPopupOpen(true);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const onLogoutClick = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      auth.signOut();
      setIsMenuOpen(false);
      setAnchorEl(null);
    }
  };
  const onClose = async () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "#4697e2",
        cursor: "pointer",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <>
      {usr ? (
        <Box
          sx={{
            width: {
              sm: "112px",
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            onClick={onAvatarClick}
            {...stringAvatar(usr.displayName)}
          ></Avatar>
        </Box>
      ) : isLoading ? (
        <Box
          sx={{
            width: {
              sm: "112px",
            },
          }}
        ></Box>
      ) : (
        <Button
          onClick={onLoginClick}
          variant="contained"
          sx={{
            // backgroundColor: "white",
            height: "2.2rem",
            flexGrow: 1,
            maxWidth: "7rem",
            minWidth: "3rem",
            fontWeight: "600",
          }}
        >
          Log in
        </Button>
      )}
      {isLoginPopupOpen ? (
        <AuthPopup setIsPopupOpen={setIsLoginPopupOpen} />
      ) : null}
      {isMenuOpen ? (
        <Menu
          open={isMenuOpen}
          anchorEl={anchorEl}
          onClose={onClose}
          dense
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            horizontal: "center",
          }}
          autoFocus={false}
        >
          <MenuItem dense>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem dense>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={onLogoutClick} dense>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      ) : null}
    </>
  );
}
